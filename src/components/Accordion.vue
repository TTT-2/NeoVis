<template>
  <div>
    <div @click="toggle()" class="cursor-pointer">
      <slot name="title"/>
    </div>
    <div v-if="this.opened === undefined && internalOpen || this.opened !== undefined && openedSync">
      <slot name="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'

@Component
export default class Accordion extends Vue {
  @PropSync('opened', { required: false }) openedSync!: boolean;

  internalOpen = false

  private toggle (): void {
    this.openedSync = !this.openedSync
    this.internalOpen = !this.internalOpen
  }
}
</script>
