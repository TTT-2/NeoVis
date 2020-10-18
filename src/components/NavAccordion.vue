<template>
  <neo-accordion @update-state="opened = $event" class="border-l-8 border-gray-500 dark:border-gray-800">
    <span slot="title" class="inline-block select-none w-full h-full hover:text-gray-700 dark:hover:text-gray-400 shadow-xs border-gray-400">
      <font-awesome-icon :icon="this.opened ? 'angle-up' : 'angle-down'" class="mx-2" ></font-awesome-icon>
      {{ title }}
    </span>
    <div class="ml-8" slot="content">
      <slot name="content" />
    </div>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/Accordion.vue'

@Component({
  components: {
    NeoAccordion
  }
})
export default class NavAccordion extends Vue {
  @Prop({ default: 'UNTITLED' }) title: string;

  opened = false;
}
</script>
