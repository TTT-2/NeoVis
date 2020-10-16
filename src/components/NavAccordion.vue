<template>
  <neo-accordion @update-state="opened = $event">
    <span slot="title" class="select-none hover:text-on-main-high-emphasis">
      <font-awesome-icon :icon="this.opened ? 'angle-up' : 'angle-down'" class="mr-2" ></font-awesome-icon>
      {{ title }}
    </span>
    <slot name="content" slot="content" class="ml-6" />
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
