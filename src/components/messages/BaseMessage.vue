<template>
  <div :class="role">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

div {
  border-radius: 10px;
  padding: 8px;
  white-space: pre-wrap;
  word-break: break-word;
  font: 0.9rem Roboto, sans-serif;
  display: inline-block;

  @include respond(phone) {
    font-size: 1rem;
  }
}

.sent {
  background-color: #cdcbcb;
}

.received {
  background-color: #ffdf43;
}

</style>
