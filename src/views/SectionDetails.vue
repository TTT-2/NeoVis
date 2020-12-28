<template>
<neo-spinner :loading.sync="isLoading" >
  <neo-param-info-box :title="$route.params.objectName + ' / ' + $route.params.sectionName" :icon="'cube'">

    <div v-if="hasFunctions">
      <p class="text-xl">Functions:</p>

      <div class="ml-4 flex flex-col items-start">
        <neo-realm-info-router-link v-for="(item, index) in content.function" :key="index" :realm="item.realm" :base="$route.params.baseName" :section="$route.params.sectionName" :object="$route.params.objectName" :element="item.name">{{ item.name }}</neo-realm-info-router-link>
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

interface SectionData {
  function?: Record<string, Record<string, unknown>>
}

@Component({
  components: {
    NeoParamInfoBox,
    NeoRealmInfoRouterLink,
    NeoSpinner,
    NeoIconAccordion
  }
})
export default class SectionDetails extends Vue {
  content: SectionData = {}

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
          title: 'Could not fetch data for the section. Please retry later!',
          text: reason,
          type: 'error'
        })
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  get hasFunctions (): boolean {
    return this.content?.function !== undefined
  }

  get dataLink (): string {
    const lnk = this.$route.params.baseName.toLowerCase() + '/' + this.$route.params.objectName.toLowerCase() + '/' + this.$route.params.sectionName.toLowerCase() + '/detail.json'

    return lnk
  }
}
</script>
