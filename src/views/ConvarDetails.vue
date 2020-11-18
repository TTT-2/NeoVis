<template>
<neo-spinner :loading.sync="isLoading" >
  <div v-show="!isLoading" v-if="Object.entries(this.content).length !== 0">
    <neo-param-flag v-if="isInternal">Internal</neo-param-flag>
    <neo-param-flag v-if="isDeprecated">Deprecated</neo-param-flag>
    <neo-param-flag v-if="is2D">2D</neo-param-flag>
    <neo-param-flag v-if="is3D">3D</neo-param-flag>
    <neo-param-flag v-if="isImportant">Important</neo-param-flag>
    <neo-param-flag v-if="isPredicted">Predicted</neo-param-flag>

    <neo-convar-line :realm="content.realm" :name="content.name" :source="content.source"></neo-convar-line>

    <neo-param-info-box v-if="this.content.data !== undefined" :title="'Information'" :icon="'info'">
      <table>
        <tr v-if="hasHelptext">
          <td class="pr-3 font-bold">Helptext:</td><td>{{ this.content.data.helptext }}</td>
        </tr>
        <tr>
          <td class="pr-3 font-bold">Default:</td><td>{{ this.content.data.value }}</td>
        </tr>
        <tr v-if="this.content.data.flags !== undefined">
          <td class="pr-3 font-bold">Flags:</td><td>{{ this.content.data.flags }}</td>
        </tr>
      </table>
    </neo-param-info-box>

    <div v-if="this.content.params !== undefined">
      <neo-param-warn-box v-if="hasNote" :title="'Note'">
        <p class="block" v-for="(line, index) in this.content.params.note" :key="index">{{ line.text }}</p>
      </neo-param-warn-box>
      <neo-param-info-box v-if="hasDescription" :title="'Description'" :icon="'quote-right'">
        <p class="block" v-for="(line, index) in this.content.params.desc" :key="index">{{ line.text }}</p>
      </neo-param-info-box>
    </div>
  </div>
</neo-spinner>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Watch } from 'vue-property-decorator'
import NeoConvarLine from '@/components/ConvarLine.vue'
import NeoParamInfoBox from '@/components/ParamInfoBox.vue'
import NeoParamWarnBox from '@/components/ParamWarnBox.vue'
import NeoSpinner from '@/components/Spinner.vue'
import NeoParamFlag from '@/components/ParamFlag.vue'

interface ConvarData {
  name?: string,
  realm?: string,
  data?: {
    helptext?: string,
    flags?: string,
    value: string
  },
  source?: {
    file: string,
    line: number
  },
  params?: {
    desc?:
      {
        text: string
      }[],
    note?:
      {
        text: string
      }[],
    internal?: boolean,
    predicted?: boolean,
    '2D'?: boolean,
    '3D'?: boolean,
    deprecated?: boolean,
    important?: boolean,
    return?:
      {
        description?: string,
        typs?: Array<string>
      }[]
  }
}

@Component({
  components: {
    NeoConvarLine,
    NeoParamInfoBox,
    NeoParamWarnBox,
    NeoSpinner,
    NeoParamFlag
  }
})
export default class ConvarDetails extends Vue {
  content: ConvarData = {}

  isLoading = true

  created (): void {
    this.fetchData()
  }

  @Watch('$route')
  fetchData (): void {
    this.isLoading = true

    axios.get('/data/' + this.dataLink + '.json')
      .then(response => {
        this.content = response.data
      })
      .catch(reason => {
        this.$notify({
          title: 'Could not fetch data for the function',
          text: reason,
          type: 'error'
        })
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  get hasHelptext (): boolean {
    return this.content?.data?.helptext !== undefined
  }

  get hasDescription (): boolean {
    return this.content?.params?.desc !== undefined && this.content?.params?.desc?.length !== 0
  }

  get hasNote (): boolean {
    return this.content?.params?.note !== undefined && this.content?.params?.note?.length !== 0
  }

  get isInternal (): boolean {
    return this.content?.params?.internal !== undefined
  }

  get is2D (): boolean {
    return this.content?.params !== undefined && this.content?.params['2D'] !== undefined
  }

  get is3D (): boolean {
    return this.content?.params !== undefined && this.content?.params['3D'] !== undefined
  }

  get isDeprecated (): boolean {
    return this.content?.params?.deprecated !== undefined
  }

  get isImportant (): boolean {
    return this.content?.params?.important !== undefined
  }

  get isPredicted (): boolean {
    return this.content?.params?.predicted !== undefined
  }

  get dataLink (): string {
    var lnk = 'createconvar/'

    if (this.$route.params.objectName !== undefined) lnk += this.$route.params.objectName.toLowerCase() + '/'
    lnk += this.$route.params.sectionName.toLowerCase() + '/'
    lnk += this.$route.params.realmName.toLowerCase() + '/'
    lnk += this.$route.params.elementName.replace(':', '..').replace(/[^\w.]/gi, '')

    return lnk
  }
}
</script>
