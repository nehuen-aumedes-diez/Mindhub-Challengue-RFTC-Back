const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')
const jwt = require('jsonwebtoken')


const controller = {
    signUp: async (req,res,next)=>{

        let {name, email,password} = req.body

        let role = "user"
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        password = bcryptjs.hashSync(password,10)

        try{
            User.create({name, email,password, role,verified,logged,code})
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch(error){
            next(error)
        } 


    },
    verify: async (req,res,next)=>{
        const { code } = req.params


        try{  
            let user = await User.findOneAndUpdate({code: code}, {verified: true }, {new: true})
            if(user){
                return res.redirect('http://localhost:3000/signinsignup')
            }
            return userNotFoundResponse(req,res)
        }catch(error){
            next(error)
        }
    },
    signIn: async (req,res,next)=>{
        const {password} = req.body;
        const {user} = req;
        try{
            const passwordVerify = bcryptjs.compareSync(password, user.password)

            if(passwordVerify){
                await User.findOneAndUpdate({_id: user.id},{logged: true}, {new: true})
                const token = jwt.sign(
                {id: user._id, nombre: user.name, logged: user.logged},
                process.env.KEY_JWT,
                {expiresIn: 60*60*24}
                    )
                    return res.status(200).json({
                        response: { user, token},
                        success: true,
                        message: 'Welcome ' + user.name
                    })
            }
            return invalidCredentialsResponse(req,res)
        } catch(error){
            next(error)
        }
    },
    logInToken: async (req,res,next)=>{
        let{user} = req
        try{
            return res.json({
                response: {
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                success: true,
                message: 'Welcome ' + user.name
            })
        } catch(error){
            next(error)
        }
    },
    signout: async (req,res,next)=>{

        const {id}= req.user

        try{
            await User.findOneAndUpdate({_id: id}, {logged: false}, {new: true})
            return userSignedOutResponse(req,res)
        } catch(error){
            next(error)
        }
    }
}

module.exports = controller;