<template>
  <div>
    {{state.data}}
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import axios from '@/utils/axios.js'

const state = reactive({
  data: {}
})

const getBaseInfo = () => {
  axios.get('/api/users/get-base').then(res => {
    state.data = res
  })
}

getBaseInfo()
</script>
<style lang="scss" scoped>
</style>
