<template>
  <div @keyup.enter="sendMessage($event)" class="flex flex-col w-full h-full py-4 px-10">
    <div class="relative flex flex-row w-full h-full border border-apple-green">
      <settings :username="user.username" @leave-chat="disconnectUser($event)" />
      <div class="flex flex-col w-5/6">
        <message v-for="(msg, index) in messages" :messageInfo="msg" :key="index"></message>
      </div>
      <div class="w-1/6 py-2 pl-3 text-left border-l border-apple-green">
        Online: 
        <ul>
          <li v-for="user of onlineUsers" :key="user['.key']">
            {{user.username}}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <base-input class="w-4/5 leading-normal text-4" v-model="message" />
      <button @click="sendMessage($event)" class="btn --primary --small">Send</button>
    </div>
  </div>
</template>

<script>
import socket from "../services/SocketService";
import BaseInput from "./lib/BaseInput";
import Message from "./Message";
import Settings from "./Settings";
import FirebaseService from "../services/FirebaseService";

export default {
  components: {
    Message,
    Settings,
    BaseInput
  },
  data() {
    return {
      users: [],
      message: "",
      socket: socket,
      dbRef: FirebaseService.getDbRef()
    };
  },
  firebase: {
    users: FirebaseService.getDbRef()
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.$store.commit("addMessage", data);
    });
    window.addEventListener('unload', () => {
      this.disconnectUser();
    })
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    user() {
      return this.$store.state.user;
    },
    onlineUsers() {
      return this.users.filter(user => user.active)
    },
  },
  methods: {
    sendMessage() {
      this.socket.emit("SEND_MESSAGE", {
        user: this.user.username,
        nameColor: this.user.nameColor,
        messageColor: this.user.messageColor,
        message: this.message
      });
      this.message = "";
    },
    disconnectUser() {
      this.$store.dispatch("logOut", { username: this.user.username})
    }
  },
  beforeDestroy() {
    this.disconnectUser();
  }
};
</script>