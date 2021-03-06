<template>
  <neo-accordion :opened.sync="opened">
    <span slot="title" :class="[
      'inline-flex items-center text-lg font-bold select-none w-full px-4 py-1 hover:text-gray-800 dark:hover:text-gray-400',
      this.opened ? 'bg-gray-400 text-gray-900 dark:bg-gray-700 dark:text-gray-100' : ''
      ]">
      <font-awesome-icon :icon="this.icon" size="sm" class="mr-2"></font-awesome-icon>
      <span>
        {{ this.title }}
      </span>
    </span>
    <div slot="content">
      <div v-for="(item, key) in this.elements" :key="key">
        <neo-sidebar-menu-item-l2 v-if="Array.isArray(item) == false" :defaultOpened="isL2ChildOpen(key)" :element="item" :objectName="key" :baseName="baseName"></neo-sidebar-menu-item-l2>
        <neo-sidebar-menu-item-l3 v-else :defaultOpened="isL3ChildOpen(key)" :elements="item" :baseName="baseName" :sectionName="key"></neo-sidebar-menu-item-l3>
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
  @Prop({ default: 'link' }) icon!: string;
  @Prop({ default: 'UNTITLED' }) title!: string;
  @Prop({ default: '' }) baseName!: string;
  @Prop({ default: () => ({}) }) elements!: Record<string, unknown>;
  @Prop({ default: false }) defaultOpened!: boolean;

  opened = this.defaultOpened

  isL3ChildOpen (sectionName: string): boolean {
    return this.defaultOpened && this.$route.params.sectionName === sectionName
  }

  isL2ChildOpen (objectName: string): boolean {
    return this.defaultOpened && this.$route.params.objectName === objectName
  }
}
</script>
