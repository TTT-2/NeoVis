<template>
  <param-box :title="title" :icon="icon" class="border border-red-400 dark:border-red-700 bg-red-300 dark:bg-red-900">
    <slot/>
  </param-box>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ParamBox from '@/components/ParamBox.vue'

@Component({
  components: {
    ParamBox
  }
})
export default class ParamWarnBox extends Vue {
  @Prop({ default: 'UNTITLED' }) title!: string;
  @Prop({ default: 'exclamation-triangle' }) icon!: string;
}
</script>
