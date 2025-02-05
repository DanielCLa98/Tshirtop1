<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Contraseña</label>
          <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
        <div class="flex justify-between space-x-4 mt-4">
          <button type="submit" class="w-1/2 bg-blue-500 text-white py-2 rounded-lg">Ingresar</button>
          <router-link to="/register" class="w-1/2 bg-green-500 text-white py-2 rounded-lg text-center">
            Registrarse
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3002/protected/login", {
          email: this.email,
          password: this.password
        });

        if (response.data.token) {
          console.log("Token recibido:", response.data.token);
          localStorage.setItem("token", response.data.token);
          console.log("Token guardado en LocalStorage:", localStorage.getItem("token"));
          window.location.href = "/";
        } else {
          this.errorMessage = "No se recibió token del servidor.";
        }
      } catch (error) {
        if (error.response) {
          console.error("Error en la solicitud de login:", error.response.data);
          this.errorMessage = error.response.data.message || "Error desconocido al iniciar sesión.";
        } else {
          console.error("Error en la conexión:", error);
          this.errorMessage = "No se pudo conectar con el servidor.";
        }
      }
    }
  }
};
</script>
