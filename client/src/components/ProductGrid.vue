<template>
  <div class="grid">
    <ProductCard v-for="item in Products" :key="item"
      v-bind:id="item.id"
      v-bind:price="item.price"
      v-bind:name="item.name"
      v-bind:seller="item.seller"
      v-bind:img_url="item.images_url"
       ></ProductCard>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductController from "../Api/ProductController";
export default {
  name: "ProductGrid",
  components: {
    ProductCard,
  },
  data() {
    return {
      Products: '',
    };
  },
  methods:{
      async get()
      {
          const response = await ProductController.getproducts()
          this.Products = response.data
          
      }
  },
  created ()
  {
      this.get()
      console.log(this.Products)
  }
  
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 350px);
  grid-gap: 15px 15px;

  margin-top: 5em;
  padding: 0;
}
@media only screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: repeat(2, 225px);
    margin-left: 0.45em;
    margin-right: 0.25em;
  }
}
</style>