<template>
  <neo-icon-accordion :opened.sync="openedSync" class="border-l-8 border-gray-500 dark:border-gray-800" titleClasses="hover:text-gray-700 dark:hover:text-gray-400 ring-1 ring-black ring-opacity-5 border-gray-400">
    <slot slot="title" name="title">
      {{ title }}
    </slot>
    <div class="ml-8" slot="content">
      <slot name="content" />
    </div>
  </neo-icon-accordion>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'
import NeoIconAccordion from '@/components/IconAccordion.vue'

@Component({
  components: {
    NeoIconAccordion
  }
})
export default class NavAccordion extends Vue {
  @Prop({ default: 'UNTITLED' }) title!: string;
  @PropSync('opened', { required: false }) openedSync!: boolean;
}
</script>
