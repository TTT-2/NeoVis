<template>
  <neo-accordion :title="objectName" @update-state="opened = $event">
    <div slot="content">
        <neo-sidebar-menu-item-l3 v-for="(section, name) in element.sections" :key="name" :elements="section.function" :objectName="objectName" :sectionName="name"></neo-sidebar-menu-item-l3>
    </div>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/NavAccordion.vue'
import NeoSidebarMenuItemL3 from '@/components/SidebarMenuItemL3.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'

@Component({
  components: {
    NeoAccordion,
    NeoSidebarMenuItemL3,
    NeoRealmInfoRouterLink
  }
})
export default class SidebarMenuItemL2 extends Vue {
  @Prop() element: Record<string, unknown>;
  @Prop({ default: 'untitled object' }) objectName: string;

  opened = false;
}
</script>
