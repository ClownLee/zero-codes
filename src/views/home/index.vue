<template>
  <div class="zero-home">
    HOME
    <div class="zero-home__item">
      {{store.state.base.username}}
      <div class="zero-home__item--sex">
        {{ store.state.base.sex }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();

store.dispatch('base/setUsername', '张三')
store.dispatch('base/setSex', '男')
store.dispatch('edu/setEducationOne', { id: '1623546565', school: '四川旅游学院', majo: '物流管理', edu: '大专' })
console.log(store.state.edu.education)
store.dispatch('edu/modifyEducationOne', { id: '1623546565', school: '四川旅游学院', majo: '计算机技术与科学', edu: '本科' })
console.log(store.state.edu.education)

</script>
<style lang="scss" scoped>
@include block(home) {
  background-color: red;
  color: white;
  @include element(item) {
    background-color: aqua;
    @include modifier(sex) {
      background-color: blueviolet;
    }
  }
}
</style>
