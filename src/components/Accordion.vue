<template>
  <div>
    <div @click="toggle()" class="cursor-pointer">
      <slot name="title"/>
    </div>
    <div v-if="openedSync">
      <slot name="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'

@Component
export default class Accordion extends Vue {
  @PropSync('opened', { default: false }) openedSync!: boolean;

  private toggle (): void {
    this.openedSync = !this.openedSync
  }
}
</script>
