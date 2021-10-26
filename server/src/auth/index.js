const { sequelize, user } = require('../../models');
const Joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const schema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .messages({
            'string.base': `email should be a type of 'text'`,
            'string.empty': `الرجاء ملىء الأميل`,
            'any.required': `password is required`

        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .messages({
            'string.base': `password should be a type of 'text'`,
            'string.empty': `الرجاء ملىء كلمة السر`,
            'string.min': `password can be shorter than 3`,
            "object.pattern": "password must be a-z A-Z 0-9 3-30",
            'any.required': `password is required`

        })
})



async function Register(req, res, next) {

    const { error } = schema.validate(req.body)
    if (error) {
        return res.json({ error: error.message })
    }
    let thisuser = undefined
    try {
        thisuser = await user.findOne({ where: { email: req.body.email } })
    }
    catch (err) {
        console.log(err)
        return res.json({ error: 'server error',token:'' })
    }
    console.log(thisuser)
    if (thisuser) {
        return res.json({ error: 'المستخدم مسجل',token:'' })
    }

    
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
       
        if (err) {
            return res.json({ error: 'server error',token:'' })
        }
        let newuser = undefined
        try {
            newuser = await user.create({ email: req.body.email, password:hash,role:'admin' })
        }
        catch (err) {
            console.log(err)
            return res.json({ error: 'server error',token:'' })
        }

        const token = jwt.sign(JSON.stringify(thisuser),process.env.TOKEN_SECRET)
        console.log(token)
        return res.json({error:'',token:token})
    });

    
}






async function Login(req, res, next) {

    let error = ''
    try {
        await schema.validateAsync(req.body)
    }
    catch (err) {

        error = err
        return res.json({ error: error.message,token: '',user:'' })

    }

    let thisuser = ''
    try {
        thisuser = await user.findOne({ where: { email: req.body.email }, raw: true })
        if (!thisuser) {
            return res.json({ error: 'user dosnt exist',token: '' ,user:''})

        }

        
        bcrypt.compare(req.body.password, thisuser.password, async function (err, result) {
            if (err) return res.json({ error: 'server error' })
            if (result == false) return res.json({ error: 'كلمة السر خاطئة',token: '',user:'' })
            
            if (result == true)
            {
                const token = jwt.sign(JSON.stringify(thisuser),process.env.TOKEN_SECRET)
                
                return res.json({ error:'' ,token:token,user:{email: thisuser.email,role: thisuser.role} })
            } 
            
        });


    } catch (error) {
        res.json({ error: 'server error' ,token: ''})
        return
    }


}



module.exports = { Register, Login }