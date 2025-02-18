<template>
    <div class="container mx-auto py-10">
      <h1 class="text-3xl font-bold text-center">🛒 Tu Carrito</h1>
  
      <div v-if="cartStore.cart.length > 0" class="mt-6">
        <div v-for="product in cartStore.cart" :key="product.id" class="flex justify-between items-center border-b py-4">
          <div class="flex items-center space-x-4">
            <img :src="product.image" :alt="product.name" class="w-20 h-20 object-cover rounded-md">
            <div>
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <p class="text-gray-500">{{ product.brand }}</p>
              <p class="text-xl font-bold">${{ product.price }} x {{ product.quantity }}</p>
            </div>
          </div>
  
          <button class="bg-red-500 text-white px-4 py-2 rounded-lg" @click="cartStore.removeFromCart(product.id)">
            Eliminar
          </button>
        </div>
  
        <div class="mt-6 text-right">
          <h2 class="text-2xl font-bold">Total: ${{ cartStore.totalPrice }}</h2>
          <button class="mt-4 bg-green-600 text-white py-3 px-8 rounded-lg">Proceder al Pago</button>
        </div>
      </div>
  
      <p v-else class="text-center text-gray-500 mt-10">Tu carrito está vacío.</p>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "../store/cart";
  
  export default {
    name: "CartPage",
    setup() {
      const cartStore = useCartStore();
      return { cartStore };
    },
  };
  </script>
  