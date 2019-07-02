<template>
  <div @keyup.enter="signUp($event)" class="flex justify-center items-center w-full h-full">
    <div
      class="flex flex-col w-84 h-full mt-20 px-4 py-8 border border-grey-darker-50 shadow-card-hover"
    >
    <template v-if="isSignUp">
      <base-input class="my-1" label="Username" v-model="username"/>
      <base-input class="my-1" type="email" label="Email" v-model="email"/>
      <base-input class="my-1" type="password" label="Password" v-model="password"/>
      <base-input class="my-1" type="password" label="Confirm password" v-model="confirmPassword"/>
      <span class="text-left cursor-pointer" @click="()=> isSignUp=false">Do you already have an account?</span>
      <button class="btn --cta mt-4" @click="signUp($event)">Sign up</button>
    </template>
    <template v-else>
      <base-input class="my-1" label="Username" v-model="username"/>
      <base-input class="my-1" type="password" label="Password" v-model="password"/>
      <span v-if="$route.query.error" class=" text-left text-red-500 text-6"> {{$route.query.error}}</span>
      <span class="text-left cursor-pointer" @click="()=> isSignUp=true">Don't you have an account?</span>
      <button class="btn --cta mt-4" @click="logIn($event)">Log in</button>
    </template>
      
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
      confirmPassword: "",
      isSignUp: false
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        username: this.username,
        email: this.email,
        password: this.password,
        nameColor: "#000",
        messageColor: "#000"
      })
      .then(() => {
        this.$router.push({ name: "chat" });
      })
      .catch(err => {
        console.log(err, "err auth");
      });
    },
    logIn() {
      this.$store.dispatch("logIn", {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: "chat" });
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>