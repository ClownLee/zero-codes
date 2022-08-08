<template>
  <div class="zero-home">
    HOME
    <div class="zero-home__item">
      {{store.state.base.username}}
      <div class="zero-home__item--sex">
        {{ state.baseInfo.username }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.sex }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.phone }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.email }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.birthday }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.nation }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.education }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.graduated_from }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.graduated_time }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.political_outlook }}
      </div>
      <div class="zero-home__item--sex">
        {{ state.baseInfo.self_evaluation }}
      </div>
    </div>
  </div>
</template>
<script setup>
import utils from '@/utils';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { getBase } from '@/service';
const store = useStore();

const state = reactive({
  baseInfo: {}
});

const getBaseInfo = async () => {
  const {
    address,
    birthday,
    education,
    email,
    graduated_from,
    graduated_time,
    id,
    nation,
    phone,
    political_outlook,
    self_evaluation,
    sex,
    username
    } = await getBase();

  store.dispatch('base/setAddress', address)
  store.dispatch('base/setBirthday', birthday)
  store.dispatch('base/setEducation', education)
  store.dispatch('base/setEmail', email)
  store.dispatch('base/setGraduatedFrom', graduated_from)
  store.dispatch('base/setGraduatedTime', graduated_time)
  store.dispatch('base/setNation', nation)
  store.dispatch('base/setPhone', phone)
  store.dispatch('base/setPoliticalOutlook', political_outlook)
  store.dispatch('base/setSelfEvaluation', self_evaluation)
  store.dispatch('base/setSex', sex)
  store.dispatch('base/setUsername', username)
  store.dispatch('base/setId', id)

}


getBaseInfo();
/* console.log(utils.getHashId())

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
