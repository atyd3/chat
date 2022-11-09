<template>
  <div class="chat__list">
    <chat-item
        v-for="chat in chats"
        :key="chat.username"
        :username="chat.username"
        :lastMessage="chat.lastMessage.value"
        :unread="Object.keys(chat.unread).length"
        :class="{ 'chat__item--active' : isActive === chat }"
        @click="openChat(chat)"
    ></chat-item>
  </div>
</template>

<script>
import ChatItem from "@/components/chats/ChatItem";

export default {
  components: {ChatItem},
  emits: ['open-chat'],
  inject: ['chats'],
  props: ['isActive'],
  methods: {
    openChat(chat) {
      this.$emit('open-chat', chat)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.chat {
  &__list {
    overflow-y: auto;
    font: 0.9rem Roboto, sans-serif;
  }

  &__item {
    &--active {
      background: #cdcbcb;
      box-shadow: none;

      @include respond(phone) {
        background: none;
        box-shadow: 0 13px 11px -12px rgba(0, 0, 0, .12);
      }
    }
  }
}

::-webkit-scrollbar {
  width: 8px;

  &-track {
    -webkit-box-shadow: inset 0 0 5px #b7c4c9;
    border-radius: 10px;
  }

  &-thumb {
    background: #cdcbcb;
    border-radius: 10px;

    &:hover {
      background: rgba(255, 223, 67, 0.5);
    }
  }
}
</style>

