<template>
  <div>
    <NavBar />

    <ProductPreview></ProductPreview>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductPreview from "@/components/ProductPreview.vue";
export default {
  name: "ProductPage",
  components: {
    ProductPreview,
    NavBar,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
body {
  background: white;
}
</style>