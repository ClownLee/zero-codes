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
