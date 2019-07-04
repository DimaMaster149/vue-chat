<template>
  <div
    @keyup.enter="()=> isSignUp ? signUp($event) : logIn($event)"
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
          @blur="validateForm('username')"
          v-model="username"
        />
        <base-input
          class="my-1"
          min="4"
          type="email"
          label="Email"
          :error="errors.email"
          @blur="validateForm('email')"
          v-model="email"
        />
        <base-input
          class="my-1"
          type="password"
          min="4"
          label="Password"
          :error="errors.password"
          @blur="validateForm('password')"
          v-model="password"
        />
        <base-input
          class="my-1"
          type="password"
          min="4"
          label="Confirm password"
          :error="errors.confirmPassword"
          @blur="validateForm('confirmPassword')"
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
import Vue from "vue";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

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
      if(this.$v.$invalid) {
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
    validateForm(props) {
      this.errors = {};
      switch(props) {
        case 'username':
          if (this.$v.username.$invalid) 
            Vue.set(this.errors, "username", "username is required and should be at least 3 symbols");
          break;
        case 'email':
          if (this.$v.email.$invalid)
            Vue.set(this.errors, "email", "email is required");
          break;
        case 'password':
          if (this.$v.password.$invalid)
            Vue.set(this.errors, "password", "password should contains at least 4 symbols");
          break;
        case 'confirmPassword':
          if (this.$v.confirmPassword.$invalid)
            Vue.set(this.errors, "confirmPassword", "should be the same as password");
          break;
      }
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(3)
    },
    email: {
      required
    },
    password: {
      required,
      minLength: minLength(4)
    },
    confirmPassword: {
      required,
      minLength: minLength(4),
      sameAsPassword: sameAs("password")
    }
  }
};
</script>

<style lang="scss" scoped>
</style>