<template>
  <div class="chat-item">
    <div class="chat-item__user">
      <img class="chat-item__img" src="../../assets/avatar.png" width="100" height="100">
      <h3 class="cut">{{ username }}</h3>
      <span v-if="unread">&#x25cf;</span>
    </div>
    <p class="chat-item__para cut">{{ lastMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    lastMessage: {
      type: String,
      required: true
    },
    unread: {
      required: false
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.chat-item {
  box-shadow: 0px 13px 11px -12px rgba(0, 0, 0, .12);
  padding: 10px 5px;
  border-radius: 8px;
  margin-right: 5px;

  &__img {
    width: 45px;
    height: 45px;
    margin: 3px 3px 3px 0;
    border-radius: 50%;
  }

  &__user {
    display: flex;

    h3 {
      align-self: center;
      @include respond(phone){
        font-size: 1.3rem;
      }
    }

    span {
      font-size: 30px;
      color: rgba(0,0,0,.54);
    }
  }

  &__para {
    font-size: 1rem;
    padding: .4rem 0;
  }

  .cut {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 92%;
  }
}

</style>
