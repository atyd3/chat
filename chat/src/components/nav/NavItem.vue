<template>
  <div class="avatar-container tooltip" data-badge="3">
    <img src="../../assets/avatar.png" alt="user avatar" width="100" height="100">
    <div class="left">
      <p>{{user.username}}</p>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 50px;
  height: 50px;
  margin-top: 8px;

  &[data-badge] {
    position:relative;
    &:after {
      position:absolute;
      right:-5px;
      top:-5px;
      min-width:10px;
      min-height:10px;
      line-height:10px;
      padding:5px;
      color:#fff;
      background-color:#bf1f1f;
      font-size:10px;
      border-radius:20px;
      content:attr(data-badge);
      border:solid 1px #c93a3a;
      text-align: center;
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
}
.tooltip {
  //display:inline-block;
  position:relative;
  //border-bottom:1px dotted #666;
  text-align:left;
  z-index: 11;
}

.tooltip .left {
  min-width:50px;
  top:50%;
  right:100%;
  margin-right:10px;
  transform:translate(0, -50%);
  padding:10px 20px;
  color:#000000;
  background-color:#cdcbcb;
  font-weight:normal;
  font-size:13px;
  border-radius:5px;
  position:absolute;
  box-sizing:border-box;
  box-shadow:0 1px 8px rgba(0,0,0,0.2);
  display:none;
}

.tooltip:hover .left {
  display:block;
}

.tooltip .left i {
  position:absolute;
  top:50%;
  left:100%;
  margin-top:-12px;
  width:12px;
  height:24px;
  overflow:hidden;
}

.tooltip .left i::after {
  content:'';
  position:absolute;
  width:12px;
  height:12px;
  left:0;
  top:50%;
  transform:translate(-50%,-50%) rotate(-45deg);
  background-color:#cdcbcb;
  box-shadow:0 1px 3px 1px rgba(0,0,0,0.1);
  box-sizing: border-box;
}


</style>
