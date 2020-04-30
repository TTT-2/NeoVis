<template>
<div>
  <span>{{ $route.params.itemName }}:{{ $route.params.attributeName }}</span>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component()
export default class FunctionDescription extends Vue {
  content = { type: 'datastructure', subtype: 'function', name: 'TTT2NET:Get' }
}
</script>
