<template>
  <base-card class="grid-container">
        <chat-settings></chat-settings>
      <user-bar></user-bar>
    <chat-list class="left"></chat-list>
    <messages-list></messages-list>
    <send-message class="right"></send-message>
  </base-card>
</template>
<script>
import ChatSettings from "@/components/ChatSettings";
import UserBar from "@/components/UserBar"
import ChatList from "@/components/ChatList";
import MessagesList from "@/components/MessagesList";
import SendMessage from "@/components/SendMessage";

export default {
  components: {SendMessage, MessagesList, UserBar, ChatList, ChatSettings}
}


</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 2fr 15fr 1fr;
  height: 90vh;
}

.right {
  grid-column: 2/3;
}

.left {
  grid-row: 2/ span 2
}
</style>
