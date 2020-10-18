<template>
<div v-if="Object.entries(this.content).length !== 0">
  <neo-function-line :realm="content.realm" :name="content.name" :params="content.params !== undefined ? content.params.param : undefined"></neo-function-line>
  <div v-if="this.content.params !== undefined">
    <div v-if="this.content.params.desc !== undefined" class="p-2 my-2 rounded border border-gray-700">
      <span class="block font-bold text-lg">Description</span>
      <div class="py-1 px-4">
        <span class="block" v-for="(line, index) in this.content.params.desc" :key="index">{{ line.text }}</span>
      </div>
    </div>
    <div v-if="this.content.params.param !== undefined" class="p-2 my-2 rounded border border-gray-700">
      <span class="block font-bold text-lg">Params</span>
      <div class="px-4">
        <table class="table-auto">
          <tbody>
            <tr v-for="(param, index) in this.content.params.param" :key="index">
              <td class="pr-2 font-mono font-bold">{{ param.typs.join('|') }}</td>
              <td class="pr-2">{{ param.name }}</td>
              <td>{{ param.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Watch } from 'vue-property-decorator'
import NeoFunctionLine from '@/components/FunctionLine.vue'

@Component({
  components: {
    NeoFunctionLine
  }
})
export default class FunctionDescription extends Vue {
  content = {}

  mounted (): void {
    this.fetchData()
  }

  @Watch('$route')
  fetchData (): void {
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
  }

  get dataLink (): string {
    var lnk = ''

    if (this.$route.params.objectName !== undefined) lnk += this.$route.params.objectName + '/'

    lnk += this.$route.params.sectionName + '/'
    lnk += this.$route.params.realmName + '/'
    lnk += this.$route.params.elementName.replace(':', '..')

    return lnk
  }
}
</script>
