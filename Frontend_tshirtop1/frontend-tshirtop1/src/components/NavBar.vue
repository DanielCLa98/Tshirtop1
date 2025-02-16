<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link to="/">TshirtShop</router-link>
      </div>

      <!-- Menú principal (oculto en móviles) -->
      <ul class="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li><a href="#" class="hover:text-black transition-colors">Hombres</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Mujeres</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Niños</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Nuevos lanzamientos</a></li>
      </ul>

      <!-- Search bar (oculto en móviles) -->
      <div class="relative hidden md:block w-64">
        <input
          type="text"
          placeholder="Buscar..."
          class="w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button class="absolute right-2 top-2 text-gray-400">
          <LucideSearch class="w-5 h-5" />
        </button>
      </div>

      <!-- Icons y Botón de Sesión -->
      <div class="flex space-x-6 items-center">
        <!-- Ícono del carrito con contador de productos -->
        <router-link to="/cart" class="relative text-gray-600 hover:text-black transition-colors">
          <LucideShoppingCart class="w-6 h-6" />
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {{ cartStore.totalItems }}
          </span>
        </router-link>

        <!-- Si el usuario está autenticado, muestra el icono de usuario y "Cerrar Sesión" -->
        <div v-if="isAuthenticated" class="flex items-center space-x-3">
          <LucideUser class="w-6 h-6 text-gray-600" />
          <button 
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-all">
            Cerrar Sesión
          </button>
        </div>

        <!-- Si el usuario NO está autenticado, muestra "Iniciar Sesión" -->
        <router-link 
          v-if="!isAuthenticated"
          to="/login"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all">
          Iniciar Sesión
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { LucideShoppingCart, LucideUser, LucideSearch } from "lucide-vue-next";
import { useCartStore } from "../store/cart";
import { ref, onMounted } from "vue";

export default {
  name: "NavBar",
  setup() {
    const cartStore = useCartStore();
    const isAuthenticated = ref(false);

    // Detectar si hay un token al cargar la página
    onMounted(() => {
      isAuthenticated.value = localStorage.getItem("token") !== null;
    });

    const logout = () => {
      localStorage.removeItem("token");
      isAuthenticated.value = false; // Actualiza la variable reactiva
      window.location.reload(); // Recarga la página para reflejar cambios
    };

    return { cartStore, isAuthenticated, logout };
  },
  components: {
    LucideShoppingCart,
    LucideUser,
    LucideSearch,
  },
};
</script>
