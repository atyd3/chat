<template>
  <div class="container">
    <div class="flex">
      <img src="../assets/avatar.png" width="100" height="100">
      <h3 class="cut">Username</h3>
    </div>
    <p class="cut">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laudantium nulla odit. Aliquid
      asperiores aspernatur, dolore dolores et fugit ipsa magni nesciunt nihil quasi soluta tempore? Consequatur harum
      pariatur repudiandae.</p>
  </div>
</template>


<style scoped>

img {
  width: 45px;
  height: 45px;
  margin: 3px 3px 3px 0;
}

.cut {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 90%;
}

.flex {
  display: flex;
}

.flex h3 {
  align-self: center;
}

.container {
  box-shadow: 0px 13px 11px -12px rgba(0,0,0,.12);
  margin: 0px 0px;
  padding: 10px 0px;
}

</style>
