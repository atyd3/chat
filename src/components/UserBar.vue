<template>
  <div class="status-bar">
    <div class="back-icon" @click="navigateBack">
      <img src="../assets/arrow.svg">
    </div>
    <img src="../assets/avatar.png" class="status-bar__img " width="100" height="100">
    <div class="status-container">
      <h3>{{ user }}</h3>
      <p>online</p>
    </div>
    <div class="close-icon" @click="closeChat">
      <span>&#10005;</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-chat', 'navigate-back'],
  props: {
    user: {
      type: String,
      required: false
    }
  },
  methods: {
    closeChat() {
      this.$emit('close-chat');
    },
    navigateBack(){
      this.$emit('navigate-back');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.status-bar {
  font: 1rem "Roboto", sans-serif;
  display: flex;
  position: relative;
  box-shadow: 0 13px 11px -12px rgba(0, 0, 0, .12);
  padding-bottom: 10px;

  &__img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: block;
    border: 5px solid #ffda47;
    margin: 0 10px 4px 15px;

    @include respond(phone){
      margin-left: 55px
    }
  }

  .status-container {
    position: absolute;
    top: 10px;
    left: 80px;
    @include respond(phone) {
      left: 120px;
    }
  }

  .close-icon {
    display: none;

    &:hover {
     cursor: pointer;
    }
  }

  .back-icon {
    position: absolute;
    top: 10px;
    display: none;

    @include respond(phone) {
      display: block;
    }

    img {
      width: 40px;
      padding: 0;
      transform: rotate(180deg)
    }
  }

  &__small {
    padding: 7px;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: .8rem;
    }

    img {
      border: none;
      width: 40px;
      height: auto;
      margin: 0;
    }

    .status-container {
      left: 55px;
    }

    .close-icon {
      position: absolute;
      right: 10px;
      display: block;
    }
  }
}
</style>
