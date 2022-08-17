<template>
  <div class="send">
    <input type="text">
    <img src="../assets/arrow.svg">
  </div>
</template>

<style scoped>
input {
  padding: 10px 30px 10px 10px;
  border: 1px solid rgba(0,0,0,0.38);
  margin: 10px 0 0 5px;
  border-radius: 5px;
  width: calc(100% - 5px);
  font: 0.9rem Roboto,sans-serif;

}

input:focus {
  outline: none;
}

.send {
  position: relative;
  width: 100%;

}

.send img {
  width: 40px;
  margin-top: 10px;
  position: absolute;
  right: -5px;
  padding: 5px;
}
</style>
