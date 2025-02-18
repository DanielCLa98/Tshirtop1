<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Restablecer Contraseña</h2>
      <form @submit.prevent="resetPassword">
        <div class="mb-4">
          <label class="block text-gray-700">Nueva Contraseña</label>
          <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Confirmar Contraseña</label>
          <input v-model="confirmPassword" type="password" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="flex justify-between space-x-4 mt-4">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Restablecer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

// import { recovery } from '../utils/api';  <-- ❌ Comentar o eliminar esta línea

export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      email: this.$route.query.email || "" // Obtener el email desde la query string
    };
  },
  methods: {
    async resetPassword() {
      // ❌ Comentar la llamada a recovery.post(), ya que no existe
      // recovery.post("/reset", {
      //   email: this.email,
      //   password: this.password,
      //   confirmPassword: this.confirmPassword
      // }).catch(error => {
      //   console.error("Error al enviar la solicitud de restablecimiento:", error);
      // });

      // ✅ Mensaje de prueba en consola para evitar error
      console.log("Funcionalidad de restablecimiento deshabilitada temporalmente.");

      // Redirigir a la página de inicio de sesión
      this.$router.push("/login");
    }
  }
};
</script>
