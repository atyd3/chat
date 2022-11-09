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
import UserBar from "@/components/UserBar";
import fetchMessages from "@/mixins/fetchMessages";

export default {
  components: { SendMessage, MessagesList, UserBar },
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
      this.$emit('close-chat')
    },
    getChat() {
      this.username = this.chat.username;
      this.messages = fetchMessages(this.chat);
    }
  },
  created(){
    this.getChat()
  },
  watch: {
    chat: function(newChat, oldChat) {
      if (newChat !== oldChat){
        this.getChat()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.popup-container {
  position: fixed;
  right: 70px;
  bottom: -10px;
  width: 320px;
  z-index:8;
  background-color: white;

  @include respond(phone){
    display: none;
  }
}
</style>
