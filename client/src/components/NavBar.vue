<template>
  <div class="container">
    <a @click="$router.push({ name: 'Home' })" class="logo">
      <span>S</span><span>U</span><span>M</span><span>M</span
      ><span class="colored">ER</span>
    </a>

    <div class="search-bar">
      <input class="search-input" placeholder="ابحث" type="text" />

      <img class="search-icon" src="../assets/search.svg" alt="search icon" />
    </div>
    <div v-if="!$store.state.isUserLoggedIn" class="signin-container">
      <img class="search-icon-mobile" src="../assets/search.svg" alt="" />

      <div class="signin" @click="this.$router.push('/register')">
        <img class="acc-logo" src="../assets/acc_logo.svg" alt="" />
        <div class="text">
          <h1 class="signin-text">سجل الدخول/ تسجيل</h1>
        </div>
      </div>

      <img
        @click="this.$router.push('/cart')"
        class="cart-logo"
        src="../assets/cart.svg"
        alt=""
      />
    </div>

    <div v-if="$store.state.isUserLoggedIn" class="logged">
      <img class="search-icon-mobile" src="../assets/search.svg" alt="" />
      <div class="orders">
        <h1 class="orders-text">الطلبات</h1>
      </div>
      <img
        @click="this.$router.push('/cart')"
        class="cart-logo"
        src="../assets/cart.svg"
        alt=""
      />

      <img
        @click="logout()"
        class="logout-logo"
        src="../assets/logout.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      expanded: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&display=swap");
$primary: #257afd;

.container {
  z-index: 10;
  position: fixed;
  width: auto;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  font-family: "Cairo";
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-right: 0.5em;
  padding-left: 0.5em;

  .search-icon-mobile {
    display: none;
  }

  .logo {
    font-size: 25px;
    font-weight: 600;
    color: #332d2d;
    //letter-spacing: .1rem;
    text-decoration: none;
    font-family: "Montserrat";
    transition: all 0.25s;
    span {
      color: #332d2d;
      transition: all 0.1s;
      &:hover {
        font-size: 26px;
        color: $primary;
      }
    }

    .colored {
      color: $primary;
    }

    margin-right: 1em;
  }

  /*
    .wrapper
    {
       display: flex;
       align-items: center;
       justify-content: space-between;
      */
  .search-bar {
    //margin-right: 15em;
    margin-left: 00.5em;
    height: 40px;
    width: 554px;
    background: #eaeaea;
    border-radius: 5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-right: 0.5em;
    padding-left: 0.5em;
    transition: all 0.25s;
    .search-icon {
      width: 1.5em;
      margin-right: 0.25em;
      cursor: pointer;
      transition: all 0.1s;
      &:hover {
        width: 1.7em;
      }
    }

    .search-input {
      font-family: "Cairo";
      width: 90%;
      height: 70%;
      background: transparent;
      border: none;
      outline: none;
      color: #272727;
      font-size: 17px;
      font-weight: 500;
      padding: 0;
    }
  }
}

.signin-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  cursor: pointer;
  margin-left: 2em;
  transition: all 0.25s;
}
.signin {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5em;
  padding-right: 0.35em;
  padding-left: 0.35em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  cursor: pointer;
  background: rgb(238, 238, 238);
  transition: all 0.25s;
  .text {
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 0.25em;
    .signin-text {
      font-size: 15px;
      margin: 0;
      font-weight: 600;
      text-align: center;
      transition: all 0.15s;
      &:hover {
        color: $primary;
      }
    }
  }
  .acc-logo {
    width: 25px;
    height: 25px;
    margin-left: 00.25em;
  }

  &:hover {
    background: #eaeaea;
    border-radius: 7px;
  }
}

.cart-logo {
  width: 3em;
  border-radius: 5em;
  padding: 0;
  margin-right: 0.2em;
  margin-left: 0.5em;
  background: #eaeaea;
  transition: all 0.25s;
  &:hover {
    background: #eaeaea;
    border-radius: 7px;
  }
}

.logout-logo {
  width: 2em;
  border-radius: 2em;
  padding: 0.5em;
  margin-right: 0.2em;
  margin-left: 0.5em;
  background: #eaeaea;
  transition: all 0.25s;
  &:hover {
    background: #eaeaea;
    border-radius: 7px;
    transform: rotate(-360deg);
  }
}

.logged {
  display: flex;
  justify-content: center;
  align-items: center;

  .orders {
    width: 65px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5em;
    padding-right: 0.35em;
    padding-left: 0.35em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    cursor: pointer;
    margin-left: 0.3em;
    background: rgb(238, 238, 238);
    transition: all 0.25s;

    &:hover {
      background: #eaeaea;
      border-radius: 7px;
    }

    .orders-text {
      font-size: 15px;
      margin: 0;
      font-weight: 600;
      text-align: center;
      transition: all 0.15s;
      &:hover {
        color: $primary;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  /*
  .signin-container {
    display: none;
  }
*/
  .container {
    .search-bar {
      margin: 0;
      margin-right: 00.5em;
    }

    .signin-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 170px;
      cursor: pointer;
      margin: 0;
      padding: 0;
      transition: all 0.25s;
    }
    .signin {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        display: none;

        .signin-text {
          &:hover {
            color: $primary;
          }
        }
      }
      .acc-logo {
        width: 25px;
        height: 25px;
        margin: 0;
      }

      &:hover {
        background: #eaeaea;
        border-radius: 7px;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  body {
    .wrapper {
      width: 60%;
    }

    .search-bar {
      display: none;
    }

    .container {
      .expanded-logo {
        display: none;
      }
      .search-bar {
        margin: 0;
        margin-right: 00.5em;
        display: none;
      }
      .logo {
        font-size: 20px;
      }

      .search-icon-mobile {
        display: block;
        width: 1.5em;
        cursor: pointer;
        transition: all 0.1s;
        background: rgb(238, 238, 238);
        border-radius: 5em;
        padding: 0.7em;
        transition: all 0.25s;
        margin-left: 0.25em;
        &:hover {
          border-radius: 7px;
        }
      }
      .signin-container
      {
          transform: scale(0.85);

      }
      .logged{
        transform: scale(0.85);
      }
    }
  }
}
</style>