<template>
  <div class="absolute top-0 right-0">
    <base-icon
      class="setting-cog absolute top-0 right-0 w-8 h-8 mr-1 -ml-1 cursor-pointer"
      @click="toggleShow($event)"
      icon="regular/cog"
    />
    <div class="w-24 pt-6 bg-white" v-show="show">
      <ul class="flex flex-col w-full h-full bg-white">
        <li>
          {{username}}
          <swatches v-model="nameColor" colors="text-advanced" popover-to="left" />
        </li>
        <li>
          Message
          <swatches v-model="messageColor" colors="text-advanced" popover-to="left" />
        </li>
        <li>
          <button class="btn --secondary --small" @click="leaveChat($event)">Leave chat</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
import BaseIcon from "../components/lib/BaseIcon";
export default {
  name: "Settings",
  components: {
    Swatches,
    BaseIcon
  },
  props: {
    username: {
      type: String,
      default: "username"
    }
  },
  data() {
    return {
      show: false,
      nameColor: this.$store.state.user.nameColor,
      messageColor: this.$store.state.user.messageColor
    };
  },
  watch: {
    nameColor(color) {
      this.$store.commit("updateNameColor", color);
    },
    messageColor(color) {
      this.$store.commit("updateMessageColor", color);
    }
  },
  methods: {
    leaveChat() {
      this.$emit("leave-chat");
    },
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>