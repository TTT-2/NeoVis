<template>
  <div class="bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 p-2 inline-flex items-center rounded-md shadow-md w-full">
    <neo-realm-indicator :realm="realm"></neo-realm-indicator>
    <span class="font-mono">
      <slot/>
    </span>
    <a v-if="Object.entries(source).length !== 0" :href="'https://github.com/TTT-2/TTT2/blob/master' + source.file + '#L' + source.line" class="ml-auto">
      <font-awesome-icon :icon="'external-link-alt'" class="ml-2 w-4 h-4" ></font-awesome-icon>
    </a>
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
export default class HeadLine extends Vue {
  @Prop({ default: '' }) realm!: string;
  @Prop({ default: () => ({}) }) source!: {
    file: string,
    line: number
  };
}
</script>
