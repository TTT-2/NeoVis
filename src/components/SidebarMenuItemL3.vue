<template>
  <neo-accordion :title="sectionName" class="pl-3 border-l-8 border-brand pr-4" @update-state="opened = $event">
    <div slot="content" class="ml-6">
      <div v-for="item in elements" :key="item.index">
        <neo-realm-info-router-link :realm="item.realm" :section="sectionName" :object="objectName" :element="item.name">{{ item.name }}</neo-realm-info-router-link>
      </div>
    </div>
  </neo-accordion>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/NavAccordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'

@Component({
  components: {
    NeoAccordion,
    NeoRealmInfoRouterLink
  }
})
export default class SidebarMenuItemL3 extends Vue {
  @Prop({ default: undefined }) sectionName: string;
  @Prop({ default: undefined }) objectName: string;
  @Prop() elements: Record<string, unknown>;

  opened = false;
}
</script>
