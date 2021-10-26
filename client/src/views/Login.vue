<template>

<div class="cont">
  
  <div class="main">
  <a class="logo" @click="$router.push({name:'Home'})">SUMM<span>ER</span></a>
  
 <div class="login-page">
   <h1 v-if="error" class="error">{{error}}</h1>
   <div class="form">
     
     <div class="login-form">
      
       <input v-model="email" type="email" placeholder="email" />
       <input v-model="password" type="password" placeholder="password" />
       <button v-on:click="send()">تسجيل الدخول</button>
       <h5 class="login-link">لا تملك حساب؟ <a href="/#/register">سجل هنا</a></h5>

     </div>
     
   </div>
   
 </div>
</div>
</div>



</template>

<script>
import AuthController from '@/Api/AuthController.js'

export default {
  name: 'Login',
  data() {
    return {
      email:'',
      password:'',
      error:''

    };
  },
  methods: {
    
    async send() {
      let response = ''
      try {
        response = await AuthController.Login({
          email: this.email,
          password: this.password          
        })
      } catch (err) {
        console.log(err)
        return
      }

      this.error = response.data.error

      if(!this.error)
      {
        this.$store.dispatch('setToken',response.data.token)
        this.$store.dispatch('setUser',response.data.user)
       this.$router.push('/')
      }

    }
  },
  
  }


</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&display=swap");

   $primary: #257AFD;
.login-link{
  font-family: 'Cairo';
  
}
   .cont{
     text-align: center;
      font-family: 'Cairo';
   }

.error
{  
  font-size: 15px;
  padding-top: 3em;
  padding-bottom: 3em;
  padding-left: 2em;
  padding-right: 2em;
  color: rgb(156, 0, 0);
  background:rgba($color: #ff0000, $alpha: 0.1);
  border-radius: 11px;
}
.main{
  margin-top: 5em;
 
}
span {

  color: $primary;
}
.logo {
  font-family: "Montserrat";
  font-size:2.5em;
  text-decoration: none;
 color: #2c3e50;
 font-weight: 600;
 text-align: center;
 
  span{
    text-align: center;
  }
 }

input
{
border-radius: 50px;
}

.login-page {
  
  width: 360px;
  padding: 1% 0 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5em;
}

.form {

  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 25px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 11px;
}

.form input {
  font-family: "Montserrat", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button {
  font-family: "Cairo";
  text-transform: uppercase;
  font-weight: 700;
  outline: 0;
  background: $primary;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.25s;
  padding-top: 0.85em;
  padding-bottom: 0.85em;
}

.form button:hover{
  background: #008cff;
  border-radius: 11px;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4CAF50;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}

.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}

.container .info {
  margin: 50px auto;
  text-align: center;
}

.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}

.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}

.container .info span a {
  color: #000000;
  text-decoration: none;
}

.container .info span .fa {
  color: #EF3B3A;
}

body {
  background: #76b852;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
