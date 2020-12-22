<template>
  <transition name="fade" mode="out-in" appear>
    <neo-convar-details :key="'convar-' + $route.path" v-if="this.$route.params.baseName === 'createconvar'"></neo-convar-details>
    <neo-function-details :key="'function-' + $route.path" v-else></neo-function-details>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NeoConvarDetails from './ConvarDetails.vue'
import NeoFunctionDetails from './FunctionDetails.vue'

@Component({
  components: {
    NeoConvarDetails,
    NeoFunctionDetails
  }
})
export default class Details extends Vue {
  name = 'Details'
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
