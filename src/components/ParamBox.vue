<template>
  <div class="p-2 my-2 rounded border border-gray-400 dark:border-gray-900 bg-gray-300 dark:bg-gray-700">
    <span class="inline-flex items-center select-none w-full font-bold text-xl">
      <slot name="title">
        <font-awesome-icon :icon="icon" class="mx-2 w-4 h-4" ></font-awesome-icon>
        {{ title }}
      </slot>
    </span>
    <div class="px-2" slot="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ParamBox extends Vue {
  @Prop({ default: 'UNTITLED' }) title!: string;
  @Prop({ default: 'list' }) icon!: string;
}
</script>
