<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Recuperar Contraseña</h2>
      <form @submit.prevent="resetPassword">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="flex justify-between space-x-4 mt-4">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Enviar enlace</button>
        </div>
      </form>
      <div class="text-center mt-4">
        <router-link to="/login" class="text-blue-500 hover:underline">Volver al inicio de sesión</router-link>
      </div>
    </div>
  </div>
</template>

<script>

// import { recovery } from '../utils/api';  <-- ❌ Comentar o eliminar esta línea

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    async resetPassword() {
      // ❌ Comentar la llamada a recovery.post(), ya que no existe
      // recovery.post("/forgot", { email: this.email })
      //   .catch(error => {
      //     console.error("Error al enviar la solicitud:", error);
      //   });

      // ✅ Enviar mensaje de que la función está deshabilitada temporalmente
      console.log("Funcionalidad de recuperación de contraseña deshabilitada temporalmente.");

      // Redirigir inmediatamente a la página de verificación de código (si aplica)
      this.$router.push({ path: "/verify-code", query: { email: this.email } });
    }
  }
};
</script>
