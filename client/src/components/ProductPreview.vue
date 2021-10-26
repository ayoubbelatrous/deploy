<template>
  <div class="main">
    <div class="preview">
      <img :src="currentimg" class="main-preview" />

      <div class="secondary-preview">
        <img
          v-for="image in images"
          :key="image"
          :src="image"
          @click="swapPreview(image)"
          class="img-btn"
        />
      </div>
    </div>

    <div class="info">
      <h1 class="title">{{ Data.name }}</h1>
      <h1 class="seller">SUMM<span>ER</span></h1>
      <h1 class="price">{{ Data.price }}<span>DZD</span></h1>

      <article v-html="Data.description" class="desc"></article>

      <div class="order">
        <button class="order-btn" @click="$refs.orderbtn.changeVisibility()">
          طلب
        </button>
        <button class="cart-btn" @click="addToCart()">{{addedToCart ? 'ازالة من السلة':'اضافة الا السلة'}}</button>
      </div>
    </div>
    <OrderPanel ref="orderbtn"></OrderPanel>
  </div>
</template>

<script>
import ProductController from "../Api/ProductController";
import OrderPanel from "@/components/OrderPanel.vue";
export default {
  name: "ProductPreview",
  components: {
    OrderPanel,
  },
  data() {
    return {
      Data: "",
      finished: false,
      currentimg: null,
      images: [],
      addedToCart:false
    };
  },
  methods: {
    swapPreview(url) {
      this.currentimg = url;
    },
    async getdata() {
      let response = "";
      try {
        response = await ProductController.getProduct(this.$route.params.id);
      } catch (error) {
        console.log(error);
      }

      this.Data = response.data;
      this.currentimg = `http://35.181.54.50/api/${this.Data.images_url}/0.png`;
      for (let index = 0; index < this.Data.imagecount; index++) {
        this.images.push(
          `/api/${this.Data.images_url}/${index}.png`
        );
      }

      this.finished = true;
    },
    addToCart()
    {
      if(this.addedToCart)
      {
        this.$store.dispatch('removeCart',this.$route.params.id)
        this.addedToCart = false

      }
      else
      {
        this.$store.dispatch('setCart',this.$route.params.id)
        this.addedToCart = true
      }
      
    },
    cartCheck()
    {
      const array = this.$store.state.cart
      const found = array.find(element => element == this.$route.params.id);
      if(found != undefined)
      {
        this.addedToCart = true;
      }
      console.log(found)
    }
  },
  created() {
    this.getdata();
    this.cartCheck()
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
$primary: #257afd;
$dark: #000000;

.main {
  direction: LTR;
  display: flex;
  justify-content: center;

  .preview {
    margin-left: 2em;
    .secondary-preview {
      display: flex;
      justify-content: center;
      height: 100px;
      width: 500px;
      .img-btn {
        width: 100px;
        height: 100px;
        margin-left: 0.49em;
        margin-right: 0.49em;
        background: rgb(248, 248, 248);
        transition: all 0.25s;
        &:hover {
          width: 110px;
          height: 110px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
    .main-preview {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 550px;
      height: 550px;
      margin-top: 0.5em;
      max-width: 550px;
      margin-top: 5em;
    }
  }

  .info {
    color: $dark;
    margin-left: 5rem;
    margin-top: 7em;
    font-family: "Montserrat";
    .title {
      font-weight: 500;
      margin: 0;
    }
    .seller {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      color: black;
      span {
        color: $primary;
      }
    }
    .price {
      font-size: 40px;
      font-weight: 500;
      color: $primary;
      span {
        font-size: 20px;

        color: $dark;
      }
    }
    article {
      width: 450px;
      font-size: 23px;
      font-weight: 400;
    }
    .size {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0;
      margin-top: 2em;

      .btn {
        font-family: "Montserrat";
        font-size: 17px;
        font-weight: 500;
        width: 75px;
        height: 50px;
        margin-left: 0.25em;
        margin-right: 0.25em;
        border-radius: 11px;
        border: none;
        background: #e7e7e7;
        cursor: pointer;
        &:hover {
          background: #c3c3c3;
        }
      }

      .activated-btn {
        font-family: "Montserrat";
        font-size: 17px;
        font-weight: 500;
        width: 75px;
        height: 50px;
        margin-left: 0.25em;
        margin-right: 0.25em;
        border-radius: 11px;
        border: none;
        background: #e7e7e7;
        cursor: pointer;
        border: 2px rgb(7, 135, 255) solid;
        &:hover {
          background: #c3c3c3;
        }
      }
    }
    .order {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-top: 2em;
      .quantity {
        font-family: "Montserrat";
        width: 65px;
        height: 45px;
        margin-left: 0.25em;
        margin-left: 0.25em;
        border: none;
        border-radius: 5px;
        background: #e7e7e7;
        outline: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.1em;

        .number {
          font-size: 15px;
        }
        .up {
          color: #6b6b6b;
          cursor: pointer;
        }
        .down {
          color: #6b6b6b;
          cursor: pointer;
        }
      }
      .order-btn {
        font-family: "Cairo";
        font-weight: 600;
        font-size: 20px;
        width: 250px;
        height: 46px;
        margin-left: 0.25em;
        margin-left: 0.25em;
        background: $primary;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:hover {
          background: #00558d;
        }
      }

      .cart-btn {
        font-family: "Cairo";
        font-weight: 600;
        font-size: 20px;
        width: 250px;
        height: 46px;
        margin-left: 0.25em;
        margin-left: 0.25em;
        background: orange;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:hover {
          background: rgb(199, 130, 1);
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .main {
    display: block;
    margin: 0;
    margin-top: 7em;
    padding: 0;
    .preview {
      margin: 0;
      .secondary-preview {
        width: 0;
        .img-btn {
          display: none;
        }
      }
      .main-preview {
        margin: auto;
        background: transparent;
        width: 250px;
        height: 250px;
      }
    }

    .info {
      display: block;
      margin: 0;
      margin-top: 2em;
      margin-left: 1em;
      margin-bottom: 5em;
      padding: 0;

      .desc {
        width: 100%;
        max-width: 600px;
      }

      .order{
        display: block;
        text-align: center;
        .order-btn{
          margin: 1em;
        }
      }
    }
  }
}
</style>