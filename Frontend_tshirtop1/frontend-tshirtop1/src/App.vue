<template>

<!-- Agregacion de productos -->
  <div>
    <!-- Barra de navegación -->

    <NavBar />
    <router-view />

    <!-- Sección de Productos (segundo titulo) -->
    <main class="container mx-auto py-10">
     <!-- <h2 class="text-3xl font-bold text-center mb-8">productos</h2> --> 

      <!-- Grid de productos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    NavBar,
    ProductCard,
  },
  
};

</script>
