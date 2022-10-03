<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import messages from "../messages.json";

export default {
  components: {TheHeader},
  data() {
    return {
      chats: [],
    }
  },
  methods: {
    fetchChats() {
      for (let data of messages.data) {
        data.lastMessage = this.getLastMessage(data.received, data.sent);
        this.chats.push(data);
      }
    },
    getLastMessage() {
      let lastMessage = {
        key: 0,
        value: ''
      }
      for (let i = 0; i < arguments.length; i++) {
        Object.entries(arguments[i]).forEach(([key, value]) => {
          if (key > lastMessage.key) {
            lastMessage.key = key;
            lastMessage.value = value;
          }
        });
      }
      return lastMessage;
    }
  },
  provide(){
    return { 'chats': this.chats }
  },
  created() {
    this.fetchChats();
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 10px;
}
</style>
