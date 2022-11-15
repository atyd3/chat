<template>
  <div class="content-container"></div>
  <div class="chat-nav">
    <nav-list @showPopup="togglePopup"></nav-list>
  </div>
  <div class="chat-popup" v-if="currentChat">
    <chat-popup :chat="currentChat" @closeChat="togglePopup"></chat-popup>
  </div>
</template>

<script>
import NavList from "@/components/nav/NavList";
import ChatPopup from "@/components/chats/ChatPopup";

export default {
  components: { NavList, ChatPopup },
  inject: ['chats'],
  data() {
    return {
      currentChat: null
    }
  },
  methods: {
    togglePopup(chat) {
      this.currentChat = chat
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.content-container {
  width: 90%;
  margin: 3rem auto;
  height: 150rem;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background-color: rgba(247, 245, 237, 0.54902);
}

.chat-nav {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 10;

  @include respond(phone) {
    display: none;
  }
}
</style>


