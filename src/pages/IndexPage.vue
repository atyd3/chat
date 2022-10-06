<template>
<div class="content-container"></div>
  <div class="chat-nav">
    <nav-list @showPopup="showPopup"></nav-list>
  </div>
  <div class="chat-popup" v-if="popupIsOpen">
    <chat-popup :chat="currentChat" @closeChat="hidePopup"></chat-popup>
  </div>
</template>

<script>
import NavList from "@/components/nav/NavList";
import ChatPopup from "@/components/chats/ChatPopup";

export default {
  components: {NavList, ChatPopup},
  inject: ['chats'],
  data(){
    return {
      popupIsOpen: false,
      currentChat: null
    }
  },
  methods: {
    showPopup(chat){
      this.popupIsOpen = true;
      this.currentChat = chat;
    },
    hidePopup(){
      console.log('hidepopup')
      this.popupIsOpen = false;
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
  background-color: rgba(247,245,237,0.54902);
}

.chat-nav {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index:10;

  @include respond(phone){
    display: none;
  }

}
</style>


