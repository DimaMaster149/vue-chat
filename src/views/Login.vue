<template>
  <div @keyup.enter="()=> isSignUp ? signUp($event) : logIn($event)" 
    class="flex justify-center items-center w-full h-full"
  >
    <div
      class="flex flex-col w-84 h-full mt-20 px-4 py-8 border border-grey-darker-50 shadow-card-hover"
    >
      <template v-if="isSignUp">
        <base-input 
          class="my-1" 
          min="2"
          label="Username" 
          :error="errors.username" 
          v-model="username" 
        />
        <base-input 
          class="my-1"
          min="4" 
          type="email" label="Email" 
          :error="errors.email" 
          v-model="email" 
        />
        <base-input 
          class="my-1"
          type="password"
          min="4"
          label="Password"
          :error="errors.password"
          v-model="password" 
        />
        <base-input
          class="my-1"
          type="password"
          min="4"
          label="Confirm password"
          :error="errors.password"
          v-model="confirmPassword"
        />
        <span
          class="text-left cursor-pointer"
          @click="()=> isSignUp=false"
        >Do you already have an account?</span>
        <button class="btn --cta mt-4" @click="signUp($event)">Sign up</button>
      </template>
      <template v-else>
        <base-input class="my-1" label="Username" v-model="username" />
        <base-input class="my-1" type="password" label="Password" v-model="password" />
        <span v-if="$route.query.error" class="text-left text-red-500 text-6">{{$route.query.error}}</span>
        <span
          class="text-left cursor-pointer"
          @click="()=> isSignUp=true"
        >Don't you have an account?</span>
        <button class="btn --cta mt-4" @click="logIn($event)">Log in</button>
      </template>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/lib/BaseInput";
import FirebaseService from "../services/FirebaseService";
import Vue from 'vue'

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
      isSignUp: false,
      errors: {},
      users: []
    };
  },
  firebase: {
    users: FirebaseService.getDbRef()
  },
  methods: {
    signUp() {
      if(!this.checkForm()) {
        return
      }
      this.$store
        .dispatch("signUp", {
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
      this.$store
        .dispatch("logIn", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "chat" });
        });
    },
    checkForm() {
      this.errors = {};
      if (this.password !== this.confirmPassword) {
        Vue.set(this.errors, 'password', "Passwords must match")
      }
      if (this.password.length < 4 || this.confirmPassword.length < 4 ) {
        Vue.set(this.errors, 'password', "Password length must be at least 4 symbols")
      }
      if(this.username.length < 2) {
        Vue.set(this.errors, 'username', "Username length should be at least 3 symbols")
      }
      if (this.users.findIndex(user => user.email === this.email) != -1) {
        Vue.set(this.errors, 'email', "This email is already exist")
      }
      if (this.email.length == 0) {
        Vue.set(this.errors, 'email', "Email is required")
      }
      if (this.users.findIndex(user => user.username === this.username) != -1) {
        Vue.set(this.errors, 'username', "This username is already taken")
      }
      return !Object.keys(this.errors).length > 0
    }
  }
};
</script>

<style lang="scss" scoped>
</style>