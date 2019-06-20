<template>
  <div>
    {{message}}
    <input type="text" v-model="message">
    <button @click="showDetails($event)">Click</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: "Hello world"
    };
  },
  methods: {
    showDetails(event) {
      console.log(event, "event");
      this.$emit("show-details");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
