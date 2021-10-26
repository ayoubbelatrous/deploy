const { sequelize, product, user } = require('../../models');
const fs = require('fs')
const path = require('path');

async function GetProducts(req, res, next) {
    let products = '';
    
    try {
        products = await product.findAll()
    } catch (err) {

        res.status(500).send(err)

    }

    res.json(products)
    next()

}

async function GetProduct(req, res, next) {

    let thisproduct = '';

    try {
        thisproduct = await product.findOne({ where: { id: req.params.id } })
    } catch (err) {

        res.status(404)
    }

    res.json(thisproduct)
    next()
}

async function CreateProduct(req, res, next) {

    if (req.user == 'noauth') {
        return res.json({ message: 'not allowed' })
    }
    if (req.user.role != 'admin') {
        return res.json({ message: 'not allowed' })
    }

    const { name, description, price, stock } = JSON.parse(req.body.data)
    console.log(req.files)
    const files = req.files

    let prod = null
    try {
        getuser = await user.findOne({ where: { email: req.user.email }, raw: true })

        prod = await product.create({ name, description, price, stock, sales: 0, approved: true, userId: getuser.id, images_url: '', imagecount: files.length })

    }
    catch (err) {
        console.log(err)
        return res.json({ message: 'server error' })
    }
    const newpath = `images/${prod.id}`
    console.log(newpath)
    try {
        await product.update({ images_url: newpath }, { where: { id: prod.id } })
    } catch (err) {
        console.log(err)
        return res.json({ message: 'server error' })
    }
    const dirpath = path.join(__dirname, `../public/images/${prod.id}`)


    fs.mkdir(dirpath, (err) => {
        if (err) {
            return res.json({ message: 'server error' })
        }

    })
    for (let index = 0; index < files.length; index++) {

        const element = files[index];

        console.log(dirpath)
        fs.writeFile(dirpath + `/${index}` + '.png', element.buffer, (err) => {
            if (err) {
                return res.json({ message: 'server error' })
            }
        })
    }

    res.json({ message: 'uploaded' })
}


async function GetCartItems(req, res, next) {
    console.log(req.body)
    const array = req.body.data;
    const data = []
    for (const idp of array) {
        try {
            const p = await product.findOne({ where: { id: idp } })
            data.push(p)
        } catch (err) {

            res.status(404)
        }
    }
    console.log(data)
    res.json({ data: data })
}

module.exports = { GetProducts, GetProduct, CreateProduct, GetCartItems }