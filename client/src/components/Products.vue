<template>
  <div class="main">
    <div class="listing">
      <img
        class="image"
        src="http://13.38.4.102/api/images/23/preview.png"
        alt=""
      />
      <h1 class="title">IPHONE PRO MAX</h1>
      <h1 class="price">330DZD</h1>
      <h1 class="stock">30 IN STOCK</h1>
      <h1 class="sales">10 SOLD</h1>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap");


.main {
  font-family: "Montserrat";
    background: rgb(228, 228, 228);
    width: 570px;
    margin-left: 1em;
  border-radius: 11px;
  .listing {
    background: rgb(238, 238, 238);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 250px;
    border-radius: 11px;
    margin: 2em;
    h1 {
      font-size: 15px;
      margin-right: 0.5em;
    }
    .image {
      width: 150px;
      height: 150px;
    }
  }
}
</style>