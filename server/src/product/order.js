const { sequelize, user, product, order } = require('../../models');
//require('dotenv').config()


async function MakeOrder(req, res, next) {


    
    let thisuser = null
    
    thisuser == req.user
    
    const { prodId,
        firstname,
        lastname,
        phone,
        state,
        commune,
        address,
        zipcode, } = req.body.data

        if(!prodId ||!firstname ||!lastname ||!phone ||!state ||!commune ||!address ||!zipcode ){
            return res.json({error:'املأ المعلوملت',messgae:null})
        }


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    try {
        order.create({
            firstname,
            lastname,
            phone,
            state,
            commune,
            address,
            zipcode, productId: prodId, userId:thisuser.id, date: today
        })
    } catch (err) {
        console.log(err)
        res.json({error:'حدث خطأ' ,message:null})
        return
    }


    return res.json({error:null ,message:'تم الطلب'})

}

module.exports =
{
    MakeOrder
}