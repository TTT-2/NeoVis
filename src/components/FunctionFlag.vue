<template>
  <div class="mr-2 mb-2 bg-red-400 dark:bg-red-800 text-gray-900 dark:text-gray-100 py-1 px-3 inline-block rounded-md shadow-md">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FunctionFlag extends Vue {
  @Prop({ default: '' }) name!: string;
}
</script>
