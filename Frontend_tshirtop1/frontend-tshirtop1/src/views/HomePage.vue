<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
    <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <p v-else class="text-center text-gray-500">No hay productos disponibles</p>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { getAllProducts } from "../utils/productService";

export default {
  name: "HomePage",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [], // ✅ Inicializar `products`
    };
  },
  async mounted() {
    this.products = await getAllProducts(); // ✅ Llamar a la API al montar el componente
  }
};
</script>