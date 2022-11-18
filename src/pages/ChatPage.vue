<template>
  <base-card class="grid-container">
    <chat-settings :class="['right-shadow', 'left', { 'hide': displayMessages }]"></chat-settings>
    <chat-list :class="['grid-container__left', 'right-shadow', 'left', { 'hide': displayMessages }]"
               :isActive="currentChat" @openChat="triggerOpenChat"></chat-list>

    <user-bar :class="['right', { 'hide': !displayMessages }]" :user="currentUser"
              @navigateBack="showUsersList"></user-bar>
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
import fetchMessages from "@/mixins/fetchMessages";

export default {
  components: {SendMessage, MessagesList, UserBar, ChatList, ChatSettings},
  inject: {chats: 'chats'},
  data() {
    return {
      currentChat: this.chats[0],
      messages: [],
      displayMessages: false,
    }
  },
  methods: {
    triggerOpenChat(chat) {
      console.log('triggered', chat)
      this.$router.push({name: `chat`, params: {user: chat.username}});
    },
    openChat() {
      console.log('open chat')
      for (let chat of this.chats) {
        if (chat.username === this.$route.params.user) {
          this.currentChat = chat;
          console.log('open chat ', chat.username)
        }
      }
      this.displayMessages = true;
      this.messages = fetchMessages(this.currentChat);
    },
    showUsersList() {
      this.displayMessages = false;
      this.$router.push({name: `chat`, params: {user: 'list'}})
    }
  },
  computed: {
    currentUser() {
      return this.currentChat.username.toString();
    }
  },
  watch: {
    '$route.params.user'(nParam) {
      console.log('route watcher: ', this.$route.params.user)
      if (nParam === 'list' && window.innerWidth <= 600) {
        this.displayMessages = false;
      } else {
        this.openChat()
      }
    }
  },
  created() {
    console.log('created chat page')
    if (window.innerWidth > 600) {
    this.$route.params.user !== 'list' ? this.openChat() : this.triggerOpenChat(this.currentChat);
      console.log('created user from params:', this.$route.params.user)

    }
  }
  ,
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

  @include respond(tab-land) {
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
