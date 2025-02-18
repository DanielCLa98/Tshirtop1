<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
    <!-- Enlace a detalles del producto -->
    <router-link :to="'/product/' + product.id">
      <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />
    </router-link>

    <div class="p-4">
      <h3 class="text-lg font-semibold">
        <router-link :to="'/product/' + product.id" class="hover:text-blue-600 transition">
          {{ product.name }}
        </router-link>
      </h3>
      <p class="text-gray-500 text-sm">{{ product.brand }}</p>
      <p class="text-xl font-bold mt-2">${{ product.price }}</p>

      <button
        class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        @click="addToCart"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>

import { useCartStore } from "../store/cart";


export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  setup(props) {
    const cartStore = useCartStore();

    const addToCart = () => {
      cartStore.addToCart(props.product);
      alert(`Añadido al carrito: ${props.product.name}`);
    };

    return { addToCart };
  },
};
</script>
