<template>
  <a @click="$router.push(`/product/${id}`)" class="container">
    <img class="image" :src="getimage()" alt="" />
    <div class="info">
      <h1 class="title">{{ name }}</h1>
      <h1 class="price">{{ price }}<span>DZD</span></h1>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["id", "price", "name", "seller", "img_url"],
  methods: {
    getimage() {
      return `http://35.181.54.50/api/${this.img_url}/0.png`;
    },
    geturl() {
      return `/#/product/${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");

.container {
  font-family: "Montserrat";
  cursor: pointer;
  text-decoration: none;
  background: rgb(240, 240, 240);
  width: 250px;
  height: 350px;
  border-radius: 11px;
  padding: 0;

  border-radius: 11px;
  text-align: center;

  transition: all 0.15s;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 260px;
    height: 350px;
  }
  .image {
    max-width: 100%;
    max-height: 100%;
  }
  .info {
    .title {
      font-family: "Montserrat";
      margin: 0;
      font-size: 20px;
      color: #4f4f4f;
      font-weight: 400;
    }
    .price {
      font-family: "Montserrat";
      margin: 0;
      color: #257afd;
      font-weight: 500;
      font-size: 35px;
      span {
        color: black;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.01em;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    width: 150px;
    height: 225px;
    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 170px;
      height: 240px;
    }
    .image {
      width: 140px;
      height: 140px;
    }
    .info {
      .title {
        font-size: 15px;
      }
      .price {
        font-size: 20px;
      }
    }
  }
}
</style>