<template>
  <neo-accordion @update-state="opened = $event">
    <span slot="title" :class="[
      'inline-flex items-center text-lg font-bold select-none w-full pl-4 py-1 hover:text-gray-800 dark:hover:text-gray-400',
      this.opened ? 'bg-gray-400 text-gray-900 dark:bg-gray-700 dark:text-gray-100' : ''
      ]">
      <font-awesome-icon :icon="this.icon" size="sm" class="mr-2"></font-awesome-icon>
      <span>
        {{ this.title }}
      </span>
    </span>
    <div slot="content">
      <div v-for="(item, key) in this.elements" :key="key">
        <neo-sidebar-menu-item-l2 v-if="Array.isArray(item) == false" :element="item" :objectName="key"></neo-sidebar-menu-item-l2>
        <neo-sidebar-menu-item-l3 v-else :elements="item" :objectName="specialObjectName" :sectionName="key"></neo-sidebar-menu-item-l3>
      </div>
    </div>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/Accordion.vue'
import NeoSidebarMenuItemL2 from '@/components/SidebarMenuItemL2.vue'
import NeoSidebarMenuItemL3 from '@/components/SidebarMenuItemL3.vue'

@Component({
  components: {
    NeoAccordion,
    NeoSidebarMenuItemL2,
    NeoSidebarMenuItemL3
  }
})
export default class SidebarMenuItemL1 extends Vue {
  @Prop({ default: 'link' }) icon: string;
  @Prop({ default: 'UNTITLED' }) title: string;
  @Prop({ default: '' }) specialObjectName: string;
  @Prop() elements: Array<Record<string, unknown>>|Record<string, unknown>;

  opened = false;
}
</script>
