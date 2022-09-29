<template>
  <div class="avatar-container"  @click="showPopup">
    <img src="../../assets/avatar.png" alt="user avatar" width="100" height="100">
  </div>
</template>

<script>
export default {
  emits: ['show-popup'],
  methods: {
    showPopup(){
      this.$emit('show-popup')
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 50px;
  height: 50px;
  margin-top: 8px;

  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }

}


</style>
