<template>
  <neo-head-line :realm="realm" :source="source">
    {{ name }}(<span v-for="(param, index) in params" :key="index">{{ param.typs.join('|') + ' ' + param.name }}{{ (index != (params.length - 1)) ? ', ' : '' }}</span>)
  </neo-head-line>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoRealmIndicator from '@/components/RealmIndicator.vue'
import NeoHeadLine from '@/components/HeadLine.vue'

@Component({
  components: {
    NeoRealmIndicator,
    NeoHeadLine
  }
})
export default class FunctionLine extends Vue {
  @Prop({ default: '' }) name!: string;
  @Prop({ default: '' }) realm!: string;
  @Prop({ default: () => ({}) }) source!: {
    file: string,
    line: number
  };

  @Prop({ default: () => ([]) }) params!: {
    typs: Array<string>,
    name: string
  }[];
}
</script>
