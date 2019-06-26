<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="card-title">
        <h3>Chat Group</h3>
        <hr>
      </div>
      <div class="card-body">
          <div class="messages" v-for="(msg, index) in messages" :key="index">
            <message :messageInfo="msg"></message>
          </div>
      </div>
    </div>
    <div class="card-footer">
      <form @submit.prevent="sendMessage">
        <div class="gorm-group">
          <label for="user">User:</label>
          <input type="text" v-model="user.username" class="form-control">
        </div>
          <div class="gorm-group pb-3">
            <label for="message">Message:</label>
            <input type="text" v-model="message" class="form-control">
          </div>
          <button type="submit" class="btn btn-success">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import socket from "../services/SocketService"
import Message from "./Message"
export default {
  components: {
    Message
  },
  data() {
    return {
      message: '',
      socket : socket
    }
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      console.log(this.socket, 'socket')
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