<template>
  <div class="pl-3 border-l-8 border-brand pr-4">
    <neo-accordion v-if="element.functions !== undefined" @update-state="opened = $event">
      <span slot="title" class="select-none hover:text-on-main-high-emphasis">
        <font-awesome-icon :icon="this.opened ? 'angle-up' : 'angle-down'" class="mr-2" ></font-awesome-icon>
        {{ element.name }}
      </span>
      <div slot="content" class="ml-6">
        <div v-for="item in element.functions" :key="item.index">
          <neo-realm-info-router-link :realm="item.realm" :to="'/' + element.name + '/' + item.name">{{ item.name }}</neo-realm-info-router-link>
        </div>
      </div>
    </neo-accordion>
    <neo-realm-info-router-link v-else class="hover:text-on-main-high-emphasis" :realm="element.realm" :to="'/' + element.name">{{ element.name }}</neo-realm-info-router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoAccordion from '@/components/Accordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'

@Component({
  components: {
    NeoAccordion,
    NeoRealmInfoRouterLink
  }
})
export default class SidebarMenuItemL1 extends Vue {
  @Prop({ default: '' }) name: string;
  @Prop() element: Record<string, unknown>;

  opened = false;
}
</script>
