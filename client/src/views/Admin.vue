<template>
  <div v-if="isAdmin()" class="main">
    <div class="nav">
      <a href="/" class="logo">SUMM<span>ER</span></a>
      <h1 @click="this.$router.push('/')" class="logout">Logout</h1>
    </div>
    <div class="content">
      <CreateProduct v-if="page === 'cp'"></CreateProduct>
      <DashBoard v-if="page === 'dashboard'" />
      <Products v-if="page === 'products'" />
    </div>
  </div>
</template>

<script>
import CreateProduct from "@/components/CreateProduct.vue";
import DashBoard from "@/components/DashBoard.vue";
import Products from "@/components/Products.vue";

export default {
  name: "Admin",
  components: {
    CreateProduct,
    DashBoard,
    Products,
  },
  data() {
    return {
      page: "",
    };
  },
  methods: {
    changeRoute() {
      this.page = this.$route.params.page;
    },
    isAdmin()
    {
      
      if(this.$store.state.isUserLoggedIn)
      {
        const user = this.$store.state.user
        console.log(user)
        if( user.role == 'admin')
        {
          return true
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
  },
  created() {
    this.page = this.$route.params.page;
    const user = this.$store.state.User
    console.log(user)
  },
  watch: {
    $route() {
      this.changeRoute();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap");
$primary: #257afd;
.main {
  font-family: "Montserrat";
  direction: LTR;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 25px;
    font-weight: 600;
    color: #332d2d;
    text-decoration: none;
    margin-left: 10%;

    span {
      color: $primary;
    }
  }
  .logout {
    font-size: 25px;
    font-weight: 600;
    margin-right: 10%;
    cursor: pointer;
    color: rgb(61, 60, 60);
    &:hover {
      color: rgb(0, 0, 0);
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>