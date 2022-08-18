<template>
  <base-card class="grid-container">
    <chat-settings class="right-shadow"></chat-settings>
    <chat-list class="grid-container__left right-shadow"></chat-list>

    <user-bar></user-bar>
    <messages-list></messages-list>
    <send-message class="grid-container__right"></send-message>
  </base-card>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard"
import ChatSettings from "@/components/chats/ChatSettings";
import UserBar from "@/components/UserBar"
import ChatList from "@/components/chats/ChatList";
import MessagesList from "@/components/messages/MessagesList";
import SendMessage from "@/components/messages/SendMessage";

export default {
  components: {BaseCard, SendMessage, MessagesList, UserBar, ChatList, ChatSettings}
}
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 15fr 1fr;
  height: 70vh;


  &__right {
    grid-column: 2/3;
  }

  &__left {
    grid-row: 2/ span 2;
  }

  .right-shadow {
    box-shadow: 13px 0px 11px -12px rgba(0, 0, 0, .12);
  }
}

</style>
