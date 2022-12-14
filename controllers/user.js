const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse } = require('../config/responses')

const controller = {
    signUp: async (req,res,next)=>{

        let {name, lastName,photo, age, email,password} = req.body

        let role = "user"
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        password = bcryptjs.hashSync(password,10)

        try{
            User.create({name, lastName,photo, age, email,password, role,verified,logged,code})
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
                return res.redirect('http://localhost:3000/')
            }
            return userNotFoundResponse(req,res)
        }catch(error){
            next(error)
        }
    }
}

module.exports = controller;