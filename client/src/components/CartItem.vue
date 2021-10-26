<template>
  <div @click="$router.push(`/product/${data.id}`)" class="card">
    <div class="info">
      <h1 class="title">{{data.name}}</h1>
      <h1 class="seller">SUMM<span>ER</span></h1>
      <h1 class="price">{{data.price}}<span>DZD</span></h1>
      
    </div>
    <img class="image" :src="`http://13.38.4.102/api/${data.images_url}/0.png`" alt="">
    
  </div>
</template>

<script>
export default {
  name:'CartItem',
  props:["data"],
  data(){
    return{
      
    }

  },
  methods:
  {
  
  },
  created()
  {
  }
}
</script>

<style lang="scss" scoped>
 @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
 @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600&display=swap");

$primary: #257afd;

  .card
  {
    width: 95%;
    height: 200px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: white;
    margin: 1em;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover{
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

    }
    .image
    {
      padding: 0.25em;
      width: 200px;
      height: 200px;
    }
    .info
    {
      color: rgb(41, 41, 41);
      .title
      {
        font-family: 'Cairo' 'Montserrat';
        font-size: 20px;
      }
      
      .seller
      {
        font-family: 'Montserrat';
        span{
          color: $primary;
        }
      }
      .price
      {
        font-family: 'Montserrat';
        span{
          color: $primary;
        }
      }
    }
  }


  
@media only screen and (max-width: 600px) {
  .card{
   transform: scale(0.5); 
   margin: 0;
  }
}
</style>