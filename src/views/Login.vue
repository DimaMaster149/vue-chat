<template>
  <div class="flex justify-center items-center w-full h-full">
  <div class="flex flex-col w-64 h-full mt-20 p-2 border border-grey-light-35">
      <base-input label="Username" v-model="username" />
      <!-- <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <input type="password" placeholder="Confirm password" v-model="confirmPassword"> -->
      <button class="btn" @click="logIn($event)">Log in</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/lib/BaseInput"
export default {
  components: {
    BaseInput
  },
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
          console.log(err, 'err auth')
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>