<template>
  <param-box :title="title" :icon="icon" class="border border-gray-400 dark:border-gray-900 bg-gray-300 dark:bg-gray-700">
    <slot :slot="title" name="title"/>
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
export default class ParamInfoBox extends Vue {
  @Prop({ default: 'UNTITLED' }) title!: string;
  @Prop({ default: 'list' }) icon!: string;
}
</script>
