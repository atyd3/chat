<template>
  <div class="container">
    <div class="settings-bar">
      <h2>Messages</h2>
      <div class="circle">
      <!-- @click="open-dropdown" -->
      <img src="../assets/settings.svg"></div>
    </div>
    <div class="search">
      <img src="../assets/search.svg"/>
      <!--replace with <img src="/icons/icon-search.svg">-->
      <input type="text" placeholder="Search">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-shadow: 0px 13px 11px -12px rgba(0, 0, 0, .12);

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .settings-bar {
    display: flex;
    justify-content: space-between;
    margin-right: 10px;

    .circle {
      width: 30px;
      height: 30px;

      background-color: #cdcbcb;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 24px;
      }
    }
  }

  .search {
    position: relative;

    input {
      padding: 10px 25px;
      border: none;
      background-color: #cdcbcb;
      border-radius: 10px;
      width: calc(100% - 10px);

      &:focus {
        outline: none;
      }

      ::placeholder {
        position: absolute;
        left: 25px;
      }
    }

    img {
      width: 16px;
      position: absolute;
      top: 10px;
      left: 5px;
    }
  }
}


</style>
