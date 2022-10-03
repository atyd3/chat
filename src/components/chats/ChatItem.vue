<template>
  <div class="container">
    <div class="flex">
      <img src="../../assets/avatar.png" width="100" height="100">
      <h3 class="cut">{{ username }}</h3>
    </div>
    <p class="cut">{{ lastMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    lastMessage: {
      type: String,
      required: true
    }
  }
}
</script>


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
