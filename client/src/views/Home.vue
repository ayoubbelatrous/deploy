<template>
  <div>
    <NavBar></NavBar>
    <ProductGrid />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductGrid from "@/components/ProductGrid.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    ProductGrid,
  },
};
</script>

<style scoped>

</style>