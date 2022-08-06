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
import utils from '@/utils'
import { useStore } from 'vuex';
import { getBase } from '@/service';
const store = useStore();


console.log(getBase())

/* console.log(utils.getHashId())

store.dispatch('base/setUsername', '张三')
store.dispatch('base/setPhone', '15708416802')
store.dispatch('base/setBirthday', '1995-05-03')
store.dispatch('base/setSex', '男')
store.dispatch('edu/setEducationOne', {
  edu: '大专',
  school: '四川旅游学院',
  major: '计算机技术与科学',
  time_range: '2012-09-01 ~ 2015-07-01',
  honor: ''
})
console.log(store.state.edu.education)
store.dispatch('edu/modifyEducationOne', {
  id: 'ba3cda5cd3f6f7c04a3f1305a3751ef44cdf5480a414b3381f7af28ddfc45922',
  edu: '本科',
  school: '四川旅游学院',
  major: '计算机技术与科学',
  time_range: '2012-09-01 ~ 2015-07-01',
  honor: '荣任系团委宣传部部长一职' 
})
console.log(store.state.edu.education) */

</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
