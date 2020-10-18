<template>
  <div class="bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 p-2 inline-block rounded-md shadow-md w-full">
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
