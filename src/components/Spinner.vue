<template>
    <transition name="component-fade" mode="out-in" appear>
      <div :key="'spinner'" v-if="syncedLoading" class="h-full w-full flex justify-center flex-col items-center">
        <font-awesome-icon :icon="'spinner'" size="lg" class="transition-opacity m-2" spin></font-awesome-icon>
      </div>
      <div v-else>
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

<style lang="scss">
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
