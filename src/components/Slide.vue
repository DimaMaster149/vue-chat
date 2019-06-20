<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">{{ item.name }} / {{index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      items: [{ id: 1, name: "one" }, { id: 2, name: "two" }]
    };
  },
  computed: {
    helloMessage() {
      return `Hello, ${this.name}`;
    }
  }
};
</script>s

<style lang="scss" scoped>
</style>