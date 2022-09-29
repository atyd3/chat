<template>
  <div class="messages__list" @click="createList">
    <div :class="['messages__item', message[0] === 'received' ? 'messages__item--right': '']" v-for="message in messagesList" :key="message">
      <base-message :role="message[0]" >
        <p>{{message[2]}}</p>
      </base-message>
    </div>
    <!--    <div class="messages__item">-->
    <!--      <base-message role="sent">-->
    <!--        <p>hi</p>-->
    <!--      </base-message>-->
    <!--    </div>-->
<!--        <div class="messages__item messages__item&#45;&#45;right">-->
<!--          <base-message role="received"><p>hello</p></base-message>-->
<!--        </div>-->
    <!--    <div class="messages__item messages__item&#45;&#45;right">-->
    <!--      <base-message role="received">-->
    <!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at atque blanditiis culpa-->
    <!--          cumque cupiditate earum eius illo ipsum itaque, labore laborum minus natus non odio omnis, optio quidem.</p>-->
    <!--      </base-message>-->
    <!--    </div>-->
    <!--    <div class="messages__item">-->
    <!--      <base-message role="sent">-->
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium assumenda consequatur-->
<!--              cum</p>-->
    <!--      </base-message>-->
    <!--    </div>-->
    <!--    <div class="messages__item messages__item&#45;&#45;right">-->
    <!--      <base-message role="received">-->
    <!--        <p>ok</p>-->
    <!--      </base-message>-->
    <!--    </div>-->
    <!--    <div class="messages__item">-->
    <!--      <base-message role="sent">-->
    <!--        <p>quod temporibus, vero, voluptas, voluptatum.</p>-->
    <!--      </base-message>-->
    <!--    </div>-->
    <!--      Add scroll to the last message-->
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
      for (const message in received){
        this.messagesList.push(["received", message, received[message]])
      }
      for (const message in sent){
        this.messagesList.push(["sent", message, sent[message]])
      }
      this.messagesList.sort((a, b) => a[1] - b[1]);
    }
  },
  watch: {
    messages: function(newChat, oldChat) {
      if (newChat !== oldChat) {
        this.createList();
      }
    }
  },
  created(){
    if(this.messages[0]){
      this.createList()
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
