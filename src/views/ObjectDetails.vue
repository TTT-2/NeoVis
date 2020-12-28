<template>
<neo-spinner :loading.sync="isLoading" >
  <neo-param-info-box :title="content.name" :icon="'cubes'">

    <div v-if="hasAuthors">
      <p class="text-xl">Authors:</p>
      <div class="ml-8">
        <p v-for="author in content.authors" :key="author">{{ author }}</p>
      </div>
    </div>

    <div v-if="hasSections">
      <p class="text-xl">Sections:</p>

      <div v-for="(section, sectionName) in content.sections" :key="sectionName">
        <neo-icon-accordion titleClasses="hover:text-gray-700 dark:hover:text-gray-400">
          <template #title>
            <router-link class="mx-1 inline-block" :to="sectionLink(sectionName)">{{ sectionName }}</router-link>
          </template>
          <template #content>
            <div class="ml-8 flex flex-col items-start">
              <neo-realm-info-router-link v-for="(item, index) in section.function" :key="index" :realm="item.realm" :base="$route.params.baseName" :section="sectionName" :object="$route.params.objectName" :element="item.name">{{ item.name }}</neo-realm-info-router-link>
            </div>
          </template>
        </neo-icon-accordion>
      </div>
    </div>
  </neo-param-info-box>
</neo-spinner>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Watch } from 'vue-property-decorator'

import NeoRealmInfoRouterLink from '@/components/RealmInfoRouterLink.vue'
import NeoParamInfoBox from '@/components/ParamInfoBox.vue'
import NeoSpinner from '@/components/Spinner.vue'
import NeoIconAccordion from '@/components/IconAccordion.vue'

interface ObjectData {
  name: string,
  authors?: string[],
  sections?: Record<string, Record<string, unknown>>
}

@Component({
  components: {
    NeoParamInfoBox,
    NeoRealmInfoRouterLink,
    NeoSpinner,
    NeoIconAccordion
  }
})
export default class ObjectDetails extends Vue {
  content: ObjectData = {
    name: 'UNKNOWN'
  }

  isLoading = true

  created (): void {
    this.fetchData()
  }

  @Watch('$route')
  fetchData (): void {
    this.isLoading = true

    axios.get('/data/' + this.dataLink)
      .then(response => {
        this.content = response.data.data
      })
      .catch(reason => {
        this.$notify({
          title: 'Could not fetch data for the object. Please retry later!',
          text: reason,
          type: 'error'
        })
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  get hasAuthors (): boolean {
    return this.content?.authors !== undefined
  }

  get hasSections (): boolean {
    return this.content?.sections !== undefined
  }

  sectionLink (sectionName: string): string {
    return this.$route.params.objectName + '/' + sectionName
  }

  get dataLink (): string {
    const lnk = this.$route.params.baseName.toLowerCase() + '/' + this.$route.params.objectName.toLowerCase() + '/detail.json'

    return lnk
  }
}
</script>
