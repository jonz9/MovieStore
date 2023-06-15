import { defineStore } from 'pinia'
import { firestore } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

export const useStore = defineStore('store', {
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

      await setDoc(doc(firestore, "carts", this.user.email), { cart: this.cart });
    },
    async removeFromCart(poster, title) {

      const j = 0
      for (; j < this.cart.length; j++) {
        if (this.cart[j][0] === poster) {
          break;
        }
      }
      this.cart.splice(j, 1);
    }
  }
});