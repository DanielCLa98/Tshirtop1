<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Verificar Código</h2>
      <form @submit.prevent="verifyCode">
        <div class="mb-4">
          <label class="block text-gray-700">Código de Verificación</label>
          <input v-model="code" type="text" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="flex justify-between space-x-4 mt-4">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Verificar</button>
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
      code: "",
      email: this.$route.query.email || "" // Obtener el email desde la query string
    };
  },
  methods: {
    async verifyCode() {
      // ❌ Comentar la llamada a recovery.post(), ya que no existe
      // recovery.post("/verify", {
      //   email: this.email,
      //   code: this.code
      // }).catch(error => {
      //   console.error("Error al enviar el código de verificación:", error);
      // });

      // ✅ Mensaje de prueba en consola para evitar error
      console.log("Funcionalidad de verificación deshabilitada temporalmente.");

      // Redirigir a la página de confirmación de contraseña
      this.$router.push({ path: "/confirm-password", query: { email: this.email } });
    }
  }
};
</script>
