<template>
<div>
  <neo-function-line :realm="content.realm" :name="content.name"></neo-function-line>
</div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
import NeoFunctionLine from '@/components/FunctionLine.vue'

@Component({
  components: {
    NeoFunctionLine
  }
})
export default class FunctionDescription extends Vue {
  content = {}

  mounted (): void {
    axios.get('/data/' + this.dataLink + '.json')
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

  get dataLink (): string {
    var lnk = ''

    if (this.$route.params.objectName !== undefined) lnk += this.$route.params.objectName + '/'

    lnk += this.$route.params.sectionName + '/'
    lnk += this.$route.params.realmName + '/'
    lnk += this.$route.params.elementName

    return lnk
  }
}
</script>
