import Api from '@/Api/Api'

export default {
  Register(credentials) {
    return Api().post('register',credentials)

  },
  Login(credentials) {

    return Api().post('login',credentials)
    
  }
}