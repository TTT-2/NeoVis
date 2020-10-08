<template>
  <neo-accordion @update-state="opened = $event">
    <span slot="title" :class="[
      'inline-flex items-center text-lg font-bold select-none w-full pl-4 py-1 hover:bg-brand hover:text-on-brand',
      this.opened ? 'bg-brand text-on-brand' : 'bg-main-secondary'
      ]">
      <font-awesome-icon :icon="this.icon" size="sm" class="mr-2"></font-awesome-icon>
      <span>
        {{ this.title }}
      </span>
    </span>
    <neo-sidebar-menu-item-l2 slot="content" v-for="item in this.elements" :key="item.name" :element="item"></neo-sidebar-menu-item-l2>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/Accordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'
import NeoSidebarMenuItemL2 from '@/components/SidebarMenuItemL2.vue'

@Component({
  components: {
    NeoAccordion,
    NeoSidebarMenuItemL2,
    NeoRealmInfoRouterLink
  }
})
export default class SidebarMenuItemL1 extends Vue {
  @Prop({ default: '' }) icon: string;
  @Prop({ default: '' }) title: string;
  @Prop() elements: Record<string, unknown>;

  opened = false;
}
</script>
