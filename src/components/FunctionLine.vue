<template>
  <div class="bg-main-secondary text-gray-100 px-4 p-2 inline-block rounded-md m-5 shadow-md">
    <neo-realm-indicator :realm="realm"></neo-realm-indicator>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoRealmIndicator from '@/components/RealmIndicator.vue'

@Component({
  components: {
    NeoRealmIndicator
  }
})
export default class FunctionLine extends Vue {
  @Prop({ default: '' }) name: string;
  @Prop({ default: '' }) realm: string;
}
</script>
