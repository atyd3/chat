<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,.2), 0px 2px 2px 0px rgba(0,0,0,.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  padding: 1rem;
  margin: 2rem auto;
  width: calc(90% - 2rem);
  /*background-color: rgba(247,245,237,0.54902);*/
}
</style>
