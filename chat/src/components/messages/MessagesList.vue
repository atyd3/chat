<template>
  <div class="messages__list">
    <div class="messages__item">
      <base-message role="sended">
        hi
      </base-message>
    </div>
    <div class="messages__item messages__item--right">
      <base-message role="received">hello</base-message>
    </div>
    <div class="messages__item messages__item--right">
      <base-message role="received">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at
        atque blanditiis culpa
        cumque cupiditate earum eius illo ipsum itaque, labore laborum minus natus non odio omnis, optio quidem.
      </base-message>
    </div>
    <div class="messages__item">
      <base-message role="sended">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium assumenda consequatur cum
      </base-message>
    </div>
    <div class="messages__item messages__item--right">
      <base-message role="received">
        ok
      </base-message>
    </div>
    <div class="messages__item">
      <base-message role="sended">
        quod temporibus, vero, voluptas, voluptatum.
      </base-message>
    </div>
    <!--      Add scroll to the last message-->
  </div>
</template>
<script>
import BaseMessage from "@/components/messages/BaseMessage";

export default {
  components: {BaseMessage},
}

</script>

<style lang="scss" scoped>

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
