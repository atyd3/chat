<template>
  <div class="status-bar">
    <img src="../assets/avatar.png" width="100" height="100">
    <div class="status-container">
    <h3>Username</h3>
    <p>online</p>
    </div>
  </div>
</template>

<style scoped>
.status-bar img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: block;
  border: 5px solid #ffda47;
  margin: 4px 10px 4px 5px;
}

.status-bar {
  font-family: "Roboto", sans-serif;
  display: flex;
  /*margin: 5px;*/
  position: relative;
  box-shadow: 0px 13px 11px -12px rgba(0,0,0,.12);

}

.status-container {
  position: absolute;
  top: 10px;
  left: 70px;
}
</style>
