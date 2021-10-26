<template>
  <div class="createproduct">
    <div class="image-selector">
      <input v-for="input in inputs"
        :key="input.id"
        type="file"
        accept="image/*"
        @change="changed($event)"
        :id="input.name"
      />
      <h1 @click="addInput()">+</h1>
    </div>
    <div class="info">
      <input v-model="name" type="text" placeholder="name" />
      <input v-model="price" type="text" placeholder="price" />
      <input v-model="stock" type="text" placeholder="stock" />
      <textarea v-model="description" class="desc" rows="4" cols="50">
example description just put something shit head
      </textarea>

      <button @click="send()" class="submit">Create</button>
      <h1 class="msg" v-if="data.message">{{data.message}}</h1>
      <h1 class="error-msg" v-if="data.error">{{data.error}}</h1>
    </div>
   
  </div>
</template>

<script>
import ProductController from "../Api/ProductController";
export default {
  name: "CreateProduct",
  data() {
    return {
      files: [],
      name: "",
      price: "",
      stock: "",
      description: "",
      data: "",
      inputs:[],
      currentID:0
    };
  },
  methods: {
    addInput()
    {
      this.currentID++
      this.inputs.push({id:this.currentID,name:`file${this.currentID}`})
      console.log(this.files)
    },
    async send() {
      let data = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        description: this.description,
      };
      let response = "";
      try {
        response = await ProductController.CreateProduct(this.files, data);
      } catch (err) {
        console.log(err);
      }
      this.data = response.data;
      if(this.data.message == 'uploaded')
      {
        this.$router.push('/')
      }
    },

    changed(event) {
      this.files.push(event.target.files[0])
      
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap");
$primary: #257afd;




.msg{
  color: rgb(42, 42, 42);
  font-size: 25px;
  text-align: center;
}


.createproduct {
  font-family: "Montserrat";
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 90%;
  height: 700px;
  margin: auto;
  border-radius: 11px;

  .image-selector {
    width: 450px;
    height: 450px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 9px 0px #323232;
    border: 4px rgb(129, 129, 129) dashed;
    border-radius: 11px;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .image-text {
      color: rgb(160, 160, 160);
      font-weight: 500;
      font-size: 15px;
    }
  }
  .info {
    margin-top: 2em;
    padding-top: 2em;
    width: 450px;
    height: 90%;
    background: rgb(255, 255, 255);
    border-radius: 11px;

    input {
      font-family: "Montserrat";
      outline: 0;
      background: #f2f2f2;
      width: 75%;
      border: 0;
      margin: 0 2.25em 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 500;
      border-radius: 50px;
    }
    .desc {
      font-family: "Montserrat";
      outline: 0;
      background: #f2f2f2;
      width: 75%;
      border: 0;
      margin: 0 2.25em 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 500;
      border-radius: 11px;
      height: 250px;
    }

    .submit {
      font-family: "Montserrat";
      text-transform: uppercase;
      outline: 0;
      background: $primary;
      width: 75%;
      border: 0;
      margin: 0 2.25em 15px;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
      border-radius: 50px;
      &:hover {
        background: #013a69;
      }
    }
  }
}
</style>