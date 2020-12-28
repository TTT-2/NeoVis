<template>
  <neo-accordion :opened.sync="openedSync">
    <span slot="title" class="inline-block select-none w-full h-full" :class="titleClasses">
      <font-awesome-icon :icon="this.openedSync ? 'angle-up' : 'angle-down'" class="mx-2"></font-awesome-icon>
      <slot name="title">
        {{ title }}
      </slot>
    </span>
    <slot name="content" slot="content"/>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/Accordion.vue'

@Component({
  components: {
    NeoAccordion
  }
})
export default class IconAccordion extends Vue {
  @Prop({ default: 'UNTITLED' }) title!: string;
  @Prop({ default: '' }) titleClasses!: string;
  @PropSync('opened', { required: false }) openedSync!: boolean;
}
</script>
