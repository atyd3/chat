<template>
  <div class="popup-container">
    <base-card>
      <user-bar class="status-bar__small"></user-bar>
      <messages-list class="messages__list--small"></messages-list>
      <send-message class="send send--small"></send-message>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  right: 5%;
  bottom: 10px;

  width: 320px;
  height: 425px;

  background-color: white;


}
</style>
<script>
import UserBar from "@/components/UserBar";
import BaseCard from "@/components/UI/BaseCard";
import MessagesList from "@/components/messages/MessagesList";
import SendMessage from "@/components/messages/SendMessage";

export default {
  components: {SendMessage, MessagesList, BaseCard, UserBar}
}
</script>
