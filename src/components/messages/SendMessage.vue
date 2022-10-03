<template>
  <div class="send">
    <input type="text">
    <img src="../../assets/arrow.svg">
  </div>
</template>

<style lang="scss" scoped>
.send {
  position: relative;
  width: 100%;
  margin: 10px 0 0 15px;

  img {
    width: 40px;
    position: absolute;
    right: 15px;
    padding: 5px;
  }

  input {
    padding: 10px 35px 10px 10px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 5px;
    width: calc(100% - 15px);
    font: 0.9rem Roboto, sans-serif;

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
