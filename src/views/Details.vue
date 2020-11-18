<template>
  <neo-convar-details v-if="this.$route.params.baseName === 'createconvar'"></neo-convar-details>
  <neo-function-details v-else></neo-function-details>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NeoConvarDetails from './ConvarDetails.vue'
import NeoFunctionDetails from './FunctionDetails.vue'

@Component({
  components: {
    NeoConvarDetails,
    NeoFunctionDetails
  }
})
export default class Details extends Vue {
  name = 'Details'
}
</script>
