<template>
  <div @keyup.enter="logIn($event)" class="flex justify-center items-center w-full h-full">
    <div class="flex flex-col w-84 h-full mt-20 px-4 py-8 border border-grey-darker-50 shadow-card-hover">
      <base-input class="my-1" label="Username" v-model="username"/>
      <base-input class="my-1" type="email" label="Email" v-model="email"/>
      <base-input class="my-1" type="password" label="Password" v-model="password"/>
      <base-input class="my-1" type="password" label="Confirm password" v-model="confirmPassword"/>
      <button class="btn --cta mt-4" @click="logIn($event)">Log in</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/lib/BaseInput";
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
        .dispatch("setUser", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "chat" });
        })
        .catch(err => {
          console.log(err, "err auth");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>