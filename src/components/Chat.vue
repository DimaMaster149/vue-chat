<template>
  <div>
    <message @show-details="showDetails($event)" :name="userName"/>
  </div>
</template>

<script>
import Message from "./Message";
export default {
  name: "Chat",
  components: {
    Message
  },
  data() {
    return {
      userName: "user"
    };
  },
  methods: {
    showDetails() {
      console.log("show details");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>