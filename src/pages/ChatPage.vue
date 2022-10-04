<template>
  <base-card class="grid-container">
    <chat-settings class="right-shadow left"></chat-settings>
    <chat-list class="grid-container__left right-shadow left" :isActive="currentChat" @openChat="openChat"></chat-list>

    <user-bar class="right" :user="currentUser"></user-bar>
    <messages-list class="messages right" :messages="messages"></messages-list>
    <send-message class="grid-container__right right"></send-message>
  </base-card>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard"
import ChatSettings from "@/components/ChatSettings";
import UserBar from "@/components/UserBar"
import ChatList from "@/components/chats/ChatList";
import MessagesList from "@/components/messages/MessagesList";
import SendMessage from "@/components/messages/SendMessage";

export default {
  components: {BaseCard, SendMessage, MessagesList, UserBar, ChatList, ChatSettings},
  inject: ['chats'],
  data() {
    return {
      currentChat: null,
      messages: []
    }
  },
  methods: {
    activeChat(chat) {
      this.currentChat = chat;
    },
    openChat(chat) {
      this.currentChat = chat;
    }
  },
  computed: {
    currentUser() {
      return this.currentChat.username
    }
  },
  watch: {
    currentChat(newChat, oldChat) {
      if (newChat !== oldChat) {
        this.activeChat(this.currentChat);
        this.messages = [{'received': this.currentChat.received}, {'sent': this.currentChat.sent}, {'unread': this.currentChat.unread}]
      }
    }
  },
  created() {
    this.activeChat(this.chats[0]);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.grid-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 15fr 1fr;
  height: 70vh;

  padding: 1rem;
  margin: 2rem auto;
  width: 90%;

  @include respond(phone) {
    display: flex;
    flex-direction: column;
  }

  &__right {
    grid-column: 2/3;
  }

  &__left {
    grid-row: 2/ span 2;
  }

  .right-shadow {
    box-shadow: 13px 0px 11px -10px rgba(0, 0, 0, .12);

    @include respond(phone) {
      box-shadow: none;
    }

  }

  .left {

  }

  .right {
    @include respond(phone) {
      display: none;
    }
  }
}

</style>
