<template>
  <div>
    <div @click="toggle()" class="cursor-pointer">
      <slot name="title"/>
    </div>
    <div :class="isOpen ? '' : 'overflow-hidden h-0 max-h-0'">
      <slot name="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Accordion extends Vue {
  opened = false;

  get isOpen (): boolean {
    return this.opened
  }

  private toggle (): void {
    this.opened = !this.opened
    this.$emit('updateState', this.opened)
  }
}
</script>
