<template>
  <neo-accordion :opened.sync="opened">
    <span slot="title" @click="showObjectDetails">{{ objectName }}</span>
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
import VueRouter from 'vue-router'

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

  showObjectDetails (): void {
    this.$router.push(this.link).catch(failure => {
      if (!VueRouter.isNavigationFailure(failure, VueRouter.NavigationFailureType.duplicated)) {
        // eslint-disable-next-line
        console.error(failure)
      }
    })
  }

  isChildOpen (sectionName: string): boolean {
    return this.defaultOpened && this.$route.params.sectionName === sectionName
  }

  get link (): string {
    let lnk = '/'

    lnk += this.baseName
    if (this.objectName !== '') lnk += '/' + this.objectName

    return lnk
  }
}
</script>
