<template>
  <nav-item v-for="chat in chats" :key="chat" @click="showPopup(chat)"></nav-item>
</template>
<script>
import NavItem from "@/components/nav/NavItem";
export default {
  components: { NavItem },
  inject: ['chats'],
  emits: ['show-popup'],
  methods: {
    showPopup(chat){
      this.$emit('show-popup', chat)
    }
  }
}
</script>
