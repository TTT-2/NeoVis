<template>
  <div class="flex-none w-full md:w-1/3 text-lg overflow-y-auto">
    <neo-spinner class="py-2" :loading.sync="isLoading">
      <neo-menu-item-l1 icon="book" title="Modules" :elements="this.content.module" :baseName="'module'" :defaultOpened="moduleOpened"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="sitemap" title="Classes" :elements="this.content.class" :baseName="'class'" :defaultOpened="classOpened"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="link" title="Hooks" :elements="this.content.hook" :baseName="'hook'" :defaultOpened="hookOpened"></neo-menu-item-l1>
      <neo-menu-item-l1 icon="wrench" title="Convars" :elements="this.content.createconvar" :baseName="'createconvar'" :defaultOpened="convarOpened"></neo-menu-item-l1>
    </neo-spinner>
  </div>
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
  @Prop({ default: '' }) private query!: string;

  content: {
    module: unknown
    class: unknown
    hook: unknown
    createconvar: unknown
  } = {
    module: null,
    class: null,
    hook: null,
    createconvar: null
  }

  isLoading = true

  created (): void {
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

  get moduleOpened (): boolean {
    return this.$route.params.baseName === 'module'
  }

  get classOpened (): boolean {
    return this.$route.params.baseName === 'class'
  }

  get hookOpened (): boolean {
    return this.$route.params.baseName === 'hook'
  }

  get convarOpened (): boolean {
    return this.$route.params.baseName === 'createconvar'
  }
}
</script>
