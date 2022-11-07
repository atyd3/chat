<template>
  <div class="send">
    <input type="text" v-model="userMsg">
    <img src="../../assets/arrow.svg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMsg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.send {
  position: relative;
  width: 100%;
  margin: 10px 0 0 15px;
  @include respond(phone){
    margin: 0;
  }

  img {
    width: 40px;
    position: absolute;
    right: 15px;
    padding: 5px;

    @include respond(phone){
      right: 0;
    }
  }

  input {
    padding: 10px 35px 10px 10px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 5px;
    width: calc(100% - 15px);
    font: 0.9rem Roboto, sans-serif;

    @include respond(phone) {
      width: 100%;
    }

    &:focus {
      outline: none;
    }
  }

  &--small {
    margin: 10px;
    width: auto;
    height: 50px;

    input {
      width: 100%;
    }

    img {
      right: 0;
    }
  }
}
</style>
