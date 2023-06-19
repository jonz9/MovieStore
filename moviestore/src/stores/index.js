import { defineStore } from "pinia";
import { firestore } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

export const useStore = defineStore("store", {
  state: () => ({
    user: null,
    cart: [],
  }),
  actions: {
    async addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });

      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },

    async removeFromCart(title) {
      for (let j = 0; j < this.cart.length; j++) {
        if (this.cart[j].title === title) {
          this.cart.splice(j, 1);
        }
      }

      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },
  },
});
