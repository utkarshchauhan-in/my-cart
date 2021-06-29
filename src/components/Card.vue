<template>
  <div class="item-card">
    <span class="gender"><b>Gender:</b> {{ product.gender }}</span>
    <span class="color"><b>Color:</b> {{ product.primaryColour }}</span>
    <img :src="product.searchImage" />
    <div class="brand">{{ product.brand }}</div>
    <div class="product">{{ product.productName }}</div>
    <div class="cost">
      Cost: {{ product.price }}
      <button
        v-if="!added"
        class="add-cart"
        @click="addToCart(product)"
        type="button"
      >
        Add to Cart
      </button>
      <button
        v-else
        class="remove-cart"
        @click="removeCart(product.productId)"
        type="button"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
    cartItem: Boolean,
  },
  data() {
    return {
      added: this.cartItem
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      this.$emit('addItem', product.productId);
      this.added=true;
    },
    removeCart(productId) {
      this.$store.dispatch("removeFromCart", productId);
      this.$emit('removeItem', productId);
      this.added=false;
    },
  },
};
</script>