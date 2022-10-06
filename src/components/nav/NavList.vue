<template>
  <nav-item v-for="chat in chats.slice(0,8)" :key="chat" @click="showPopup(chat)" :user="chat" :badge="Object.keys(chat.unread).length"></nav-item>
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
  },
}
</script>
