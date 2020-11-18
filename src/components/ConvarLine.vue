<template>
  <neo-head-line :realm="realm" :source="source">
    {{ name }}
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
export default class ConvarLine extends Vue {
  @Prop({ default: '' }) name!: string;
  @Prop({ default: '' }) realm!: string;

  @Prop({ default: () => ({}) }) source!: {
    file: string,
    line: number
  };
}
</script>
