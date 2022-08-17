<template>
  <li>
    <div>
      <slot></slot>
    </div>
  </li>
</template>

<style scoped>
.user div {
  border-radius: 10px;
  margin: 2px 5px;
  padding: 8px;
  display: inline-block;
  white-space: pre-wrap;
  word-break: break-word;
  font: 0.9rem Roboto,sans-serif;
}

.one div {
  max-width: 45%;
  background-color: #cdcbcb;
}

.two div {
  max-width: 45%;
  background-color: #ffdf43;
}

.two {
  text-align: right;
}

</style>
