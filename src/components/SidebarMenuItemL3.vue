<template>
  <neo-accordion :opened.sync="opened">
    <span slot="title" @click="showSectionDetails">{{ sectionName }}</span>
    <div slot="content">
      <div v-for="(item, index) in elements" :key="index">
        <neo-realm-info-router-link :realm="item.realm" :base="baseName" :section="sectionName" :object="objectName" :element="item.name">{{ item.name }}</neo-realm-info-router-link>
      </div>
    </div>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/NavAccordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'
import VueRouter from 'vue-router'

@Component({
  components: {
    NeoAccordion,
    NeoRealmInfoRouterLink
  }
})
export default class SidebarMenuItemL3 extends Vue {
  @Prop({ default: '' }) sectionName!: string;
  @Prop({ default: '' }) objectName!: string;
  @Prop({ default: '' }) baseName!: string;
  @Prop({ default: () => ({}) }) elements!: Record<string, unknown>;
  @Prop({ default: false }) defaultOpened!: boolean;

  opened = this.defaultOpened

  showSectionDetails (): void {
    this.$router.push(this.link).catch(failure => {
      if (!VueRouter.isNavigationFailure(failure, VueRouter.NavigationFailureType.duplicated)) {
        // eslint-disable-next-line
        console.error(failure)
      }
    })
  }

  get link (): string {
    const lnk = '/' + this.baseName + '/' + this.objectName + '/' + this.sectionName

    return lnk
  }
}
</script>
