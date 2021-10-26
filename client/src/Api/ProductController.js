import Api from '@/Api/Api'
import FormData from 'form-data'

export default {
  getproducts() {
    return Api().get('getproducts')

  },
  getProduct(pid) {
    return Api().get(`getproduct/${pid}`)

  },
  getCartItems(array) {
    return Api().post(`getcartitems`,array)

  },
  CreateProduct(files,pdata) {

    let data = new FormData();


    
    data.append('data',JSON.stringify(pdata))
    files.forEach(file => {
      data.append('img', file);
    });
    



    return Api().post('createproduct', data)
  }
  ,Order(data)
  {
      return Api().post('order',{data})
  }

}