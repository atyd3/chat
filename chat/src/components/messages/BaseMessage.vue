<template>
    <div :class="role">
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: ['role']
}
</script>

<style scoped>

div {
  border-radius: 10px;
  padding: 8px;
  white-space: pre-wrap;
  word-break: break-word;
  font: 0.9rem Roboto,sans-serif;
  display: inline-block;
}

.sended {
  background-color: #cdcbcb;
}

.received {
  background-color: #ffdf43;
}

</style>
