<template>
  <div class="popup-container">
    <base-card>
      <user-bar class="status-bar__small" :user="username" @closeChat="closeChat"></user-bar>
      <messages-list class="messages__list--small" :messages="messages"></messages-list>
      <send-message class="send--small"></send-message>
    </base-card>
  </div>
</template>

<script>
import SendMessage from "@/components/messages/SendMessage";
import MessagesList from "@/components/messages/MessagesList";
import BaseCard from "@/components/UI/BaseCard";
import UserBar from "@/components/UserBar";

export default {
  components: {SendMessage, MessagesList, BaseCard, UserBar},
  emits: ['close-chat'],
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      username: null,
      messages: []
    }
  },
  methods: {
    closeChat(){
      console.log('close-chat')
      this.$emit('close-chat')
    }
  },
  created(){
    this.username = this.chat.username;
    this.messages = [{'received': this.chat.received}, {'sent': this.chat.sent}]
  },
  watch: {
    chat: function(newChat, oldChat) {
      if (newChat !== oldChat){
        this.username = this.chat.username;
        this.messages = [{'received': this.chat.received}, {'sent': this.chat.sent}]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  right: 5%;
  bottom: -10px;

  width: 320px;

  background-color: white;
}
</style>
