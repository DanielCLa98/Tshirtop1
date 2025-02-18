import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductDetail from "../views/ProductDetail.vue";
import CartPage from "../views/CartPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import RecoveryPassword from "../views/RecoveryPassword.vue";
import VerifyPassword from "../views/VerifyCode.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", component: ProductDetail, props: true },
  { path: "/cart", component: CartPage },
  { path: "/login", component: LoginPage },
  {path: "/register", component: RegisterPage},
  {path: "/reset-password", component: RecoveryPassword}, 
  {path: "/verify-code", component: VerifyPassword},
  {path: "/confirm-password", component: ResetPassword}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Verifica autenticación en rutas protegidas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.path === "/login" && token) {
    console.log("Usuario ya autenticado, redirigiendo a HomePage.");
    next("/");
  } else if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    console.warn("Acceso denegado: Se requiere autenticación.");
    next(false);
  } else {
    next();
  }
});

export default router;
