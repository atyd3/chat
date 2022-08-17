<template>
  <div class="chat-list">
      <chat-item></chat-item>
    <chat-item></chat-item>
    <chat-item></chat-item>

  </div>
</template>

<script>
import ChatItem from "@/components/ChatItem";
export default {
  components: {ChatItem}
}
</script>

<style scoped>
.chat-list {
  overflow-y: scroll;
  font: 0.9rem Roboto,sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px #b7c4c9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #b7c4c9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,223,67, 0.5);
}
</style>

