<template>
  <div class="chat__list">
    <chat-item
        v-for="chat in chats"
        :key="chat"
        :username="chat.username"
        :lastMessage="chat.lastMessage.value"
        :class="{ 'chat__item--active': isActive === chat }"
        @click="activate(chat)"
    ></chat-item>
  </div>
</template>

<script>
import ChatItem from "@/components/chats/ChatItem";
import messages from './../../../messages.json';

export default {
  components: {ChatItem},
  data() {
    return {
      messages: messages,
      chats: [],
      activeChat: null
    }
  },
  methods: {
    activate(chat) {
      this.activeChat = chat
      console.log(chat)
    },
    fetchChats() {
      for (let data of messages.data) {
        data.lastMessage = this.getLastMessage(data.received, data.sent);
        this.chats.push(data);
      }
    },
    getLastMessage() {
      let lastMessage = {
        key: 0,
        value: ''
      }
      for (let i = 0; i < arguments.length; i++) {
        Object.entries(arguments[i]).forEach(([key, value]) => {
          if (key > lastMessage.key) {
            lastMessage.key = key;
            lastMessage.value = value;
          }
        });
      }
      return lastMessage
    }
  },
  created() {
    this.fetchChats();
  },
  computed: {
    isActive(){
      if (!this.activeChat){
      return this.chats[0]
      }
      return this.activeChat
    }
  }
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
      background: #cdcbcb;
      box-shadow: none;
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

