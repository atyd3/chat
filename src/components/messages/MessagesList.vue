<template>
  <div class="messages__list">
    <div :class="['messages__item', message[0] === 'received' ? 'messages__item--right': '']" v-for="message in messagesList" :key="message">
      <base-message :role="message[0]" >
        <p>{{message[2]}}</p>
      </base-message>
    </div>
  </div>
</template>
<script>
import BaseMessage from "@/components/messages/BaseMessage";

export default {
  components: {BaseMessage},
  props: ['messages'],
  data(){
    return {
      messagesList: [],
    }
  },
  methods: {
    createList(){
      this.messagesList = [];
      const {received} = this.messages[0];
      const {sent} = this.messages[1];
      const {unread} = this.messages[2];
      console.log('unread',unread);
      for (const message in received){
        this.messagesList.push(["received", message, received[message]])
      }
      for (const message in unread){
        this.messagesList.push(["received", message, unread[message]])
      }
      for (const message in sent){
        this.messagesList.push(["sent", message, sent[message]])
      }
      this.messagesList.sort((a, b) => a[1] - b[1]);
    },
    scroll(){
     const lastMessage = this.$el.querySelector('.messages__item:last-child');
     lastMessage.scrollIntoView();
    }
  },
  watch: {
    messages: async function(newChat, oldChat) {
      if (newChat || oldChat) {
        await this.createList();
      }
        this.scroll()
    }
  },
  async created(){
    if(this.messages[0]){
      await this.createList();
      this.scroll()
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";


.messages {
  &__list {
    list-style: none;
    overflow-y: auto;
    display: flex;
    margin: 10px 0 10px 15px;
    flex-direction: column;

    &--small {
      height: 310px;
      margin: 10px;

      .messages__item {
        max-width: 80%;
        margin-right: 5px;
      }
    }
  }

  &__item {
    max-width: 45%;
    margin: 5px 5px 5px 0;

    @include respond(tab-port) {
      max-width: 80%;
    }

    &--right {
      align-self: flex-end;
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
