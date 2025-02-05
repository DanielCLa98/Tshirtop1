import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  }),
  getters: {
    totalItems: (state) => state.cart.reduce((total, product) => total + product.quantity, 0),
    totalPrice: (state) => state.cart.reduce((total, product) => total + product.price * product.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const item = this.cart.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((product) => product.id !== productId);
      this.saveCart();
    },
    clearCart() {
      this.cart = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
