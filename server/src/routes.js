const {GetProducts,GetProduct,CreateProduct,GetCartItems} = require('./product')

const {MakeOrder} = require('./product/order')
const {Register,Login} = require('./auth')
const multer = require('multer')
const upload = multer()
const authtoken = require('./auth/authtoken')

module.exports = (app) => {

    app.get('/getproducts', GetProducts)
    app.get('/getproduct/:id', GetProduct)
    app.post('/getcartitems',GetCartItems)

    //auth
    app.post('/register',Register)
    app.post('/login',Login)

    app.post('/createproduct',authtoken,upload.array('img',10),CreateProduct)
    app.post('/order',authtoken,MakeOrder)
}