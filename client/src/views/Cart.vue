<template>
  <div class="cart">
    <NavBar></NavBar>
    <h1 class="title">السلة</h1>
    <div class="content">
      <div class="orders-wrapper">
        <CartItem
          v-for="item in cartdata"
          :key="item"
          v-bind:data="item"
        ></CartItem>
      </div>
      <div class="calc">
        <h3 class="products">المنتوجات: <span class="pprice"> {{price}}</span></h3>
        <h3 class="shipping">الشحن: <span> 800</span></h3>
        <h1 class="total">المجموع: <span> {{price + 800}}</span></h1>
        <button class="order-btn">طلب</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CartItem from "@/components/CartItem.vue";
import ProductController from "../Api/ProductController";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartItem,
  },
  data() {
    return {
      cartitems: [],
      cartdata:[],
      price:0
    };
  },
  methods: {
    async loadFromStore() {
      const cart = this.$store.state.cart;
      cart.forEach((item) => {
        this.cartitems.push(item);
      });
      const res = await ProductController.getCartItems({data:this.cartitems})
      this.cartdata = res.data.data

      this.cartdata.forEach(item => {
        this.price += item.price
      });
    },
  },
  created() {
    this.loadFromStore();
  },
};
</script>

<style lang="scss" scoped>
$primary: #257afd;
.cart {
  padding-top: 5em;
  font-family: "Cairo";
  .title {
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding-right: 2em;
    padding-left: 2em;

    .orders-wrapper {
      width: 700px;
      height: 600px;
      overflow-y: scroll;
      overflow-x: hidden;

      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      padding: 0.5em;
      background: white;
      display: flex;
      border-radius: 11px;
      flex-direction: column;
    }
    .orders-wrapper::-webkit-scrollbar {
      display: none;
    }
  }

  .calc {
    width: 400px;
    height: 400px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 1em;
    .products
    {
      span {
        color: $primary;
        font-size: 1.1em;
      }
    }
    .shipping
    {
      span {
        color: $primary;
        font-size: 1.1em;
      }
    }
    .total
    {
      span {
        color: $primary;
        font-size: 1.1em;
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
      text-align: center;
      &:hover {
        background: #00558d;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .cart {
    .content {
        display: block;
    }
    .orders-wrapper {
      display: block;
      z-index: 0;
      height: auto;
      width: auto;
      margin: 0;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    .calc
    {
      position: fixed;
    }
  }
}
</style>
