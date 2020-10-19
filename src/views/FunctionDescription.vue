<template>
<neo-spinner :loading.sync="isLoading" >
  <div v-show="!isLoading" v-if="Object.entries(this.content).length !== 0">
    <neo-function-line :realm="content.realm" :name="content.name" :source="content.source" :params="content.params.param"></neo-function-line>
    <div v-if="this.content.params !== undefined">
      <neo-param-info-box v-if="hasDescription" :title="'Description'" :icon="'quote-right'">
        <span class="block" v-for="(line, index) in this.content.params.desc" :key="index">{{ line.text }}</span>
      </neo-param-info-box>
      <neo-param-info-box v-if="hasParameters" :title="'Parameters'" :icon="'list'">
        <table class="table-auto ml-1">
          <tbody>
            <tr v-for="(param, index) in this.content.params.param" :key="index">
              <td class="pr-2">{{ index + 1 }}</td>
              <td class="pr-2 font-mono font-bold">{{ param.typs.join('|') }}</td>
              <td class="pr-2">{{ param.name }}</td>
              <td>{{ param.description }}</td>
            </tr>
          </tbody>
        </table>
      </neo-param-info-box>
    </div>
  </div>
</neo-spinner>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Watch } from 'vue-property-decorator'
import NeoFunctionLine from '@/components/FunctionLine.vue'
import NeoParamInfoBox from '@/components/ParamInfoBox.vue'
import NeoSpinner from '@/components/Spinner.vue'

@Component({
  components: {
    NeoFunctionLine,
    NeoParamInfoBox,
    NeoSpinner
  }
})
export default class FunctionDescription extends Vue {
  content = {
    params: {
      param: [],
      desc: []
    }
  }

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

  get hasDescription (): boolean {
    return this.content.params.desc !== undefined && this.content.params.desc.length !== 0
  }

  get hasParameters (): boolean {
    return this.content.params.param !== undefined && this.content.params.param.length !== 0
  }

  get dataLink (): string {
    var lnk = ''

    lnk += this.$route.params.baseName + '/'
    if (this.$route.params.objectName !== undefined) lnk += this.$route.params.objectName + '/'
    lnk += this.$route.params.sectionName + '/'
    lnk += this.$route.params.realmName + '/'
    lnk += this.$route.params.elementName.replace(':', '..').replace(/[^\w.]/gi, '')

    return lnk
  }
}
</script>
