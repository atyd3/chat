<template>
  <div class="container">
    <div class="flex">
      <img src="../../assets/avatar.png" width="100" height="100">
      <h3 class="cut">Username</h3>
    </div>
    <p class="cut">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laudantium nulla odit. Aliquid
      asperiores aspernatur, dolore dolores et fugit ipsa magni nesciunt nihil quasi soluta tempore? Consequatur harum
      pariatur repudiandae.</p>
  </div>
</template>


<style lang="scss" scoped>

.container {
  box-shadow: 0px 13px 11px -12px rgba(0, 0, 0, .12);
  padding: 10px 5px;
  border-radius: 8px;
  margin-right: 5px;

  img {
    width: 45px;
    height: 45px;
    margin: 3px 3px 3px 0;
    border-radius: 50%;
  }

  .flex {
    display: flex;

    h3 {
      align-self: center;
    }

  }

  .cut {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

</style>
