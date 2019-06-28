<template>
  <div class="absolute top-0 right-0">
    <span class="w-10">icon</span>
    <div class="w-32 bg-white" v-show="show">
      <ul class="flex flex-col w-full h-full bg-white">
        <li>
          Username
          <swatches v-model="nameColor"/>
        </li>
        <li>
          Message
          <swatches v-model="messageColor"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
export default {
  name: "Settings",
  components: {
    Swatches
  },
  data() {
    return {
      show: true,
      nameColor: "#000",
      messageColor: "#000"
    };
  },
  watch: {
    nameColor(color) {
      this.$store.commit("updateNameColor", color);
    },
    messageColor(color) {
      this.$store.commit("updateMessageColor", color);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>