<template>
  <span v-on="listeners" v-bind="attrs" class="icon-component inline-flex">
    <img class="w-full h-full" :src="require(`../../assets/icons/${icon}.svg`)" />
  </span>
</template>

<script>
export default {
  props: {
    // Format: <variant>/<name>
    // Example: solid/star
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      return `../../assets/icons/${this.icon}.svg`;
    },
    listeners() {
      return { ...this.$listeners };
    },
    attrs() {
      return { ...this.$attrs };
    }
  }
};
</script>

<style lang="scss">
.icon-component {
  > svg {
    @apply w-full h-full;
    fill: currentColor;
  }
}
</style>