<template>
    <div class="container mx-auto py-10">
      <router-link to="/" class="text-blue-500 hover:underline">⬅ Volver a la tienda</router-link>
  
      <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg shadow-md" />
  
        <div>
          <h1 class="text-4xl font-bold">{{ product.name }}</h1>
          <p class="text-gray-500 text-lg">{{ product.brand }}</p>
          <p class="text-3xl font-semibold mt-4">${{ product.price }}</p>
          <p class="mt-6 text-gray-700">
            Este es un producto exclusivo disponible en UCEshoes. Compra ahora antes de que se agote.
          </p>
  
          <button
            class="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            @click="addToCart"
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
  
      <p v-else class="text-center text-gray-500">Producto no encontrado.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductDetail",
    props: ["id"],
    data() {
      return {
        products: [
          { id: 1, name: "Nike Air Force 1", brand: "Nike", price: 120, image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d6f70740-0899-4d9c-8a82-57a2b0eea0fd/air-force-1-07-zapatillas-LpTbXQ.png" },
          { id: 2, name: "Adidas Yeezy 350", brand: "Adidas", price: 250, image: "https://ams3.digitaloceanspaces.com/graffica/2022/12/Adidas-Logo-1971-750x536.jpeg" },
          { id: 3, name: "Jordan 1 Retro High", brand: "Jordan", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgkEpg37Golxd2xu8m-lYlvP7ZSgaHlxKJA&s" },
          { id: 4, name: "Puma RS-X", brand: "Puma", price: 100, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/368715/01/sv01/fnd/PNA/fmt/png" },
        ],
        product: null,
      };
    },
    created() {
      const productId = parseInt(this.$route.params.id);
      this.product = this.products.find((p) => p.id === productId);
    },
    methods: {
      addToCart() {
        alert(`Añadido al carrito: ${this.product.name}`);
      },
    },
  };
  </script>
  