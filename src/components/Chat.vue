<template>
  <div @keyup.enter="sendMessage($event)" class="flex flex-col w-full h-full py-4 px-10">
    <div class="relative flex flex-row w-full h-full border border-apple-green">
      <settings />
      <div class="flex flex-col w-4/5">
      <message v-for="(msg, index) in messages" :messageInfo="msg" :key="index"></message>
      </div>
      <div class="w-1/5 py-2 border-l border-apple-green">
        Online
      </div>
    </div>
    <div class="flex flex-row w-full">
      <base-input class="w-4/5 leading-normal text-4" v-model="message"/>
      <button 
        @click="sendMessage($event)" 
        class="btn --primary --small"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import socket from "../services/SocketService"
import BaseInput from "./lib/BaseInput"
import Message from "./Message"
import Settings from "./Settings"

export default {
  components: {
    Message,
    Settings,
    BaseInput
  },
  data() {
    return {
      message: '',
      socket : socket
    }
  },
  methods: {
    sendMessage() {
      this.socket.emit('SEND_MESSAGE', {
        user: this.user.username,
        message: this.message
      });
      this.message = ''
    }
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
      this.$store.commit('addMessage', data)
    });

    this.socket.on('USER', (user) => {
      this.$store.commit('addUser', user)
    });

    this.socket.emit('ADD_USER', {
      user: this.user.username,
    });

    //make an event to send all users after some updates
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    user() {
      return this.$store.state.user
    }
  }
}
</script>