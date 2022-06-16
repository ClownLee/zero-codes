<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ZeroCodesSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  ZeroCodesSample,
  // }
});
</script>

<template>
  <div id="app">
    <zero-codes-sample />
  </div>
</template>
