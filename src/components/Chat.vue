<template>
  <div>
    <message :name="userName"/>
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



<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: "hello world"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>