<template>
  <div>
    HOME
    {{store.state.base.username}}
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();

store.dispatch('base/setUsername', '张三')

</script>
<style scoped>
</style>
