<template>
  <div class="nav">
    <div class="nav__container">
      <div class="logo"><a href="/">LOGO</a></div>
      <router-link to="/chat/list" class="chat-button">
        <img src="../../assets/chat.svg" alt="chat icon">
      </router-link>
    </div>
    <div class="banner">
      <h2>BANNER TEXT</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.nav {
  background-color: #222222;
  width: 100%;
  border-bottom: 1px solid #141414;
  z-index: 100;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1760px;
    width: 90%;
    height: 50px;
    margin: 0 auto;

    .logo a {
      color: #ffda47;
      font-size: 2rem;
      font-weight: 1000;
      text-decoration: none;
    }

    .chat-button {
      border-radius: 10px;
      height: 35px;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 12px;

      img {
        width: 30px;
        height: auto;
      }

    }
  }

  .banner {
    background-color: #252570;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.8);
    height: 120px;
    padding: 10px 5%;

    h2 {
      color: white;
    }

    @include respond(phone){
      display: none;
    }
  }
}
</style>
