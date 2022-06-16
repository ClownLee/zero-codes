<template>
  <div>
    <div>
      <div>state</div>
      <div>{{ state.msg }}</div>
    </div>
    
    <div>
      <div>props</div>
      <div>{{ props.name }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, defineProps } from 'vue';

interface State {
  msg: String;
}

const state = reactive<State>({
  msg: ''
})

const props = defineProps({
  name: {
    type: String,
    default: '哈哈哈'
  }
})

</script>
<style scoped>

</style>
