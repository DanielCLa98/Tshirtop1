<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4 text-center">Restablecer Contraseña</h2>
        <form @submit.prevent="resetPassword">
          <div class="mb-4">
            <label class="block text-gray-700">Código de Verificación</label>
            <input v-model="code" type="text" required class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Nueva Contraseña</label>
            <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <p v-if="message" class="text-center text-red-500">{{ message }}</p>
          <div class="flex justify-between space-x-4 mt-4">
            <button type="submit" class="w-full bg-green-500 text-white py-2 rounded-lg">Restablecer</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>

import { recovery } from '../utils/api';
  
  export default {
    data() {
      return {
        email: this.$route.query.email || "", // Obtener email de la query string
        code: "",  // Código ingresado por el usuario
        password: "",  // Nueva contraseña ingresada por el usuario
        message: "" // Mensaje de error si ocurre algo
      };
    },
    methods: {
      async resetPassword() {
        // Enviar los datos al backend sin verificar nada
        recovery.post("/reset", {
          email: this.email,
          code: this.code,
          newPassword: this.password
        })
        .catch(error => {
          console.error("Error al enviar la solicitud:", error);
        });
  
        // Redirigir inmediatamente al login
        this.$router.push("/login");
      }
    }
  };
  </script>
  