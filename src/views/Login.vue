<template>
  <div>
    <input type="text" placeholder="username" v-model="username">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="Confirm password" v-model="confirmPassword">
    <button @click="logIn($event)">Log in</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    logIn() {
      this.$store
        .dispatch('setUser', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "chat" });
        }).catch(err => {
          console.log('err auth')
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>