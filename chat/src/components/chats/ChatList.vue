<template>
  <div class="chat__list">
    <chat-item></chat-item>
    <chat-item class="chat__item chat__item--active"></chat-item>
    <chat-item></chat-item>
    <chat-item></chat-item>
    <chat-item></chat-item>
    <chat-item></chat-item>
    <chat-item></chat-item>
  </div>
</template>

<script>
import ChatItem from "@/components/chats/ChatItem";

export default {
  components: {ChatItem}
}
</script>

<style lang="scss" scoped>
.chat {
  &__list {
    overflow-y: auto;
    font: 0.9rem Roboto, sans-serif;
  }

  &__item {
    &--active {
      background: linear-gradient(90deg, rgba(205, 203, 203, 0.25) 25%, rgba(205, 203, 203, 1) 75%);
      box-shadow: none;
    }
  }

}


::-webkit-scrollbar {
  width: 5px;

  &-track {
    -webkit-box-shadow: inset 0 0 5px #b7c4c9;
    border-radius: 10px;
  }

  &-thumb {
    background: #b7c4c9;
    border-radius: 10px;

    &:hover {
      background: rgba(255, 223, 67, 0.5);
    }
  }
}
</style>

