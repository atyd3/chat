<template>
  <base-card class="grid-container">
    <chat-settings :class="['right-shadow', 'left', { 'hide': displayMessages }]"></chat-settings>
    <chat-list :class="['grid-container__left', 'right-shadow', 'left', { 'hide': displayMessages }]"
               :isActive="currentChat" @openChat="openChat"></chat-list>

    <user-bar :class="['right', { 'hide': !displayMessages }]" :user="currentUser"
              @navigateBack="showMessagesList"></user-bar>
    <messages-list :class="['messages','right', { 'hide': !displayMessages } ]" :messages="messages"></messages-list>
    <send-message :class="['grid-container__right', 'right', { 'hide': !displayMessages } ]"></send-message>
  </base-card>
</template>
<script>
import ChatSettings from "@/components/ChatSettings";
import UserBar from "@/components/UserBar"
import ChatList from "@/components/chats/ChatList";
import MessagesList from "@/components/messages/MessagesList";
import SendMessage from "@/components/messages/SendMessage";

export default {
  components: { SendMessage, MessagesList, UserBar, ChatList, ChatSettings },
  inject: { chats: 'chats' },
  data() {
    return {
      currentChat: this.chats[0],
      messages: [],
      displayMessages: false,
    }
  },
  methods: {
    openChat(chat) {
      this.currentChat = chat;
      this.displayMessages = true;
      this.messages = [{ 'received': this.currentChat.received }, { 'sent': this.currentChat.sent }, { 'unread': this.currentChat.unread }]
    },
    showMessagesList(){
      this.displayMessages = false;
    }
  },
  computed: {
    currentUser() {
      return this.currentChat.username.toString();
    }
  },
  watch: {
    currentChat(nChat) {
        this.openChat(nChat);
    }
  },
  created() {
    this.displayMessages = false;
    this.openChat(this.currentChat)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.hide {
  @include respond(phone) {
    display: none;
  }
}

.messages {
  @include respond(phone) {
    height: 100%;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 15fr 1fr;

  height: 70vh;
  padding: 1rem;
  margin: 2rem auto;
  width: 90%;

  @include respond(tab-land){
    grid-template-columns: 1fr 2fr;
    margin: 2rem 1rem;
    width: auto;
  }

  @include respond(phone) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 51px);
    width: 100%;
    margin: 0;
  }
  &__right {
    grid-column: 2/3;
  }

  &__left {
    grid-row: 2/ span 2;
  }

  .right-shadow {
    box-shadow: 13px 0 11px -10px rgba(0, 0, 0, .12);

    @include respond(phone) {
      box-shadow: none;
    }
  }
}
</style>
