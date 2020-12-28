<template>
  <neo-accordion :title="objectName" :opened.sync="opened">
    <div slot="content">
        <neo-sidebar-menu-item-l3 v-for="(section, name) in element.sections" :key="name" :defaultOpened="isChildOpen(name)" :elements="section.function" :objectName="objectName" :sectionName="name" :baseName="baseName"></neo-sidebar-menu-item-l3>
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
  @Prop({ default: () => ({}) }) element!: Record<string, unknown>;
  @Prop({ default: '' }) objectName!: string;
  @Prop({ default: '' }) baseName!: string;
  @Prop({ default: false }) defaultOpened!: boolean;

  opened = this.defaultOpened

  isChildOpen (sectionName: string): boolean {
    return this.defaultOpened && this.$route.params.sectionName === sectionName
  }
}
</script>
