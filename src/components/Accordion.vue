<template>
  <div>
    <div @click="toggle()" class="cursor-pointer">
      <slot name="title"/>
    </div>
    <div v-if="isOpen">
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
    this.$emit('update-state', this.opened)
  }
}
</script>
