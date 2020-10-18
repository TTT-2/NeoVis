<template>
<neo-spinner :loading.sync="isLoading">
  <div class="h-full w-full md:w-auto flex-none text-lg overflow-y-auto">
    <div class="py-2">
      <neo-menu-item-l1 icon="book" title="Modules" :elements="this.content.module" :baseName="'module'"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="sitemap" title="Classes" :elements="this.content.class" :baseName="'class'"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="link" title="Hooks" :elements="this.content.hook" :baseName="'hook'"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="wrench" title="Convars" :elements="this.content.createconvar" :baseName="'createconvar'"></neo-menu-item-l1>
    </div>
  </div>
</neo-spinner>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import NeoSpinner from '@/components/Spinner.vue'
import NeoAccordion from '@/components/Accordion.vue'
import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'
import NeoMenuItemL1 from '@/components/SidebarMenuItemL1.vue'

@Component({
  components: {
    NeoSpinner,
    NeoAccordion,
    NeoRealmInfoRouterLink,
    NeoMenuItemL1
  }
})
export default class Sidebar extends Vue {
  @Prop() private query!: string;

  content = {}
  isLoading = true

  mounted (): void {
    this.isLoading = true

    axios.get('/data/overview.json')
      .then(response => {
        this.content = Object.freeze(response.data)
      })
      .catch(reason => {
        this.$notify({
          title: 'Could not fetch data for the sidebar',
          text: reason,
          type: 'error'
        })
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>
