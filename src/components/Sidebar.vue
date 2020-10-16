<template>
  <div class="py-2 w-full md:w-auto flex-none text-lg overflow-y-scroll">
    <neo-menu-item-l1 icon="book" title="Libraries" :elements="this.content.module"></neo-menu-item-l1>
    <neo-menu-item-l1 icon="sitemap" title="Classes" :elements="this.content.class"></neo-menu-item-l1>
    <neo-menu-item-l1 icon="link" title="Hooks" :elements="this.content.hook"></neo-menu-item-l1>
    <neo-menu-item-l1 icon="wrench" title="Convars" :elements="this.content.createconvar"></neo-menu-item-l1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import NeoAccordion from '@/components/Accordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'
import NeoMenuItemL1 from '@/components/SidebarMenuItemL1.vue'

@Component({
  components: {
    NeoAccordion,
    NeoRealmInfoRouterLink,
    NeoMenuItemL1
  }
})
export default class Sidebar extends Vue {
  @Prop() private query!: string;

  content = {}

  mounted (): void {
    axios.get('/data/overview.json')
      .then(response => {
        this.content = response.data
      })
      .catch(reason => {
        this.$notify({
          title: 'Could not fetch data for the sidebar',
          text: reason,
          type: 'error'
        })
      })
  }
}
</script>

<style scoped lang="scss">

</style>
