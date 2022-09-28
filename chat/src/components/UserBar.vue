<template>
  <div class="status-bar">
    <img src="../assets/avatar.png" width="100" height="100">
    <div class="status-container">
      <h3>{{user}}</h3>
      <p>online</p>
    </div>
    <div class="close-icon">
      <span>&#10005;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      // type: String,
      // required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.status-bar {
  font: 1rem "Roboto", sans-serif;
  display: flex;
  position: relative;
  box-shadow: 0px 13px 11px -12px rgba(0, 0, 0, .12);

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: block;
    border: 5px solid #ffda47;
    margin: 0px 10px 4px 15px;
  }

  .status-container {
    position: absolute;
    top: 10px;
    left: 80px;
  }

  .close-icon {
    display: none;
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
