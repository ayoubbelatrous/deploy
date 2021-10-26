<template>
  <div v-if="showPanel" class="order-main">
    <button @click="changeVisibility()" class="exit">X</button>
    <h1>طلب</h1>
    <h1 v-if="message">{{ message }}</h1>
    <h1 v-if="error">{{ error }}</h1>

    <div class="twoinputs">
      <input
        v-model="firstname"
        class="textfield"
        type="text"
        placeholder="الاسم"
      />
      <input
        v-model="lastname"
        class="textfield"
        type="text"
        placeholder="القب"
      />
    </div>
    <input
      v-model="phone"
      class="textfield"
      type="text"
      placeholder="رقم الهاتف"
    />
    <input
      v-model="state"
      class="textfield"
      type="text"
      placeholder="الولاية"
    />
    <input
      v-model="commune"
      class="textfield"
      type="text"
      placeholder="البلدية"
    />
    <input
      v-model="address"
      class="textfield"
      type="text"
      placeholder="العنوان"
    />
    <input
      v-model="zipcode"
      class="textfield"
      type="text"
      placeholder="zip code"
    />
    <div class="twoinputs">
      <button @click="order()" class="order-btn">طلب</button>
    </div>
  </div>
</template>

<script>
import ProductController from "../Api/ProductController";
export default {
  name: "OrderPanel",
  data() {
    return {
      showPanel: false,
      prodId: this.$route.params.id,
      firstname: null,
      lastname: null,
      phone: null,
      state: null,
      commune: null,
      address: null,
      zipcode: null,
      message: null,
      error: null,
    };
  },
  methods: {
    async order() {
      let data = {
        prodId: this.prodId,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        state: this.state,
        commune: this.commune,
        address: this.address,
        zipcode: this.zipcode,
      };
      const response = await ProductController.Order(data);
      this.message = response.data.message;
      this.error = response.data.error;
      console.log(response);
    },
    changeVisibility() {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push("/register");
      } else if (this.$store.state.isUserLoggedIn) {
        this.showPanel = !this.showPanel;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-main {
  animation: 0.15s ease-out 0s 1 showanim;

  border-radius: 11px;
  position: fixed;
  direction: RTL;
  margin-top: 2em;
  width: 30%;
  padding: 1em;
  background: white;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .exit {
    font-size: 25px;
    background: transparent;
    outline: 0;
    border: none;
    margin-left: 100%;
  }
  .twoinputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .textfield {
    margin: 0.5em 1em 0.5em 1em;
    font-family: "Cairo";
    font-size: 17px;
    height: 45px;
    width: 90%;
    background: #eaeaea;
    border: none;
    border-radius: 5em;
    padding-right: 0.5em;
    outline: 0;
  }
  .order-btn {
    margin: 0.5em 1em 0.5em 1em;
    font-family: "Cairo";
    font-size: 17px;
    height: 45px;
    width: 90%;
    background: #257afd;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5em;
    padding-right: 0.5em;
    outline: 0;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: #0064fa;
    }
  }
}


@keyframes showanim {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>