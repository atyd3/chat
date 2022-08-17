<template>
  <div class="container">
    <div class="settings-bar">
      <h2>Messages</h2>
      <div class="circle"><img src="../assets/settings.svg"></div>
    </div>
    <div class="find">
      <img src="../assets/search.svg"/>
      <!--replace with <img src="/icons/icon-search.svg">-->
      <input type="text" placeholder="Find a message">
    </div>
  </div>
</template>

<style scoped>
.container {
  box-shadow: 0px 13px 11px -12px rgba(0, 0, 0, .12);
}

h2 {
  font-family: 'Roboto', sans-serif;
  margin-bottom: 5px;
}

.settings-bar {
  display: flex;
  justify-content: space-between;
}

.circle img {
  width: 24px;
}

.circle {
  width: 30px;
  height: 30px;

  background-color: #cdcbcb;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.find input {
  padding: 10px 25px;
  border: none;
  background-color: #cdcbcb;
  border-radius: 10px;
  width: 100%;
}

.find input:focus {
  outline: none;
}

.find input::placeholder {
  position: absolute;
  left: 25px;
}

.find {
  position: relative;
}

.find img {
  width: 16px;
  position: absolute;
  top: 10px;
  left: 5px;
}

</style>
