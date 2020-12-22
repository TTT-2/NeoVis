<template>
  <transition name="fade" mode="out-in" appear>
    <div :key="'spinner'" v-if="syncedLoading" class="h-full w-full flex justify-center flex-col items-center">
      <font-awesome-icon :icon="'spinner'" size="lg" class="m-2" spin></font-awesome-icon>
    </div>
    <div :key="'content'" v-else>
      <slot/>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue {
  @PropSync('loading', { type: Boolean, default: false }) syncedLoading!: boolean;
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
