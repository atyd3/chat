<template>
  <nav-item v-for="chat in chats" :key="chat" @showPopup="showPopup(chat)"></nav-item>
</template>
<script>
import NavItem from "@/components/nav/NavItem";
export default {
  components: { NavItem },
  inject: ['chats'],
  emits: ['show-popup'],
  methods: {
    showPopup(chat){
      console.log('navlist',chat);
      this.$emit('show-popup', chat)
    }
  }
}
</script>
