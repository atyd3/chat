<template>
  <base-card class="grid-container">
    <chat-settings :class="['right-shadow', 'left', {'hide': displayMessages}]"></chat-settings>
    <chat-list :class="['grid-container__left', 'right-shadow', 'left', {'hide': displayMessages}]"
               :isActive="currentChat" @openChat="openChat"></chat-list>

    <user-bar :class="['right', {'hide': !displayMessages}]" :user="currentUser" @navigateBack="showMessagesList"></user-bar>
    <messages-list :class="['messages','right', {'hide': !displayMessages}]" :messages="messages"></messages-list>
    <send-message :class="['grid-container__right', 'right', {'hide': !displayMessages}]"></send-message>
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
      messages: [],
      displayMessages: false,
    }
  },
  methods: {
    activeChat(chat) {
      this.currentChat = chat;
    },
    openChat(chat) {
      this.currentChat = chat;
      this.displayMessages = true;
    },
    showMessagesList(){
      this.displayMessages = false;
      console.log('click2')
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
    this.displayMessages = false;
    console.log('created')
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.hide {
  @include respond(phone) {
    display: none
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

  @include respond(phone) {
    display: flex;
    flex-direction: column;
    height: 85vh;
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
}

</style>
