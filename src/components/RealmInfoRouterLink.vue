<template>
  <router-link :to="link" class="inline-block w-full">
    <neo-realm-indicator :realm="realm"></neo-realm-indicator>
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NeoRealmIndicator from '@/components/RealmIndicator.vue'

@Component({
  components: {
    NeoRealmIndicator
  }
})
export default class RealmInfoRouterLink extends Vue {
  @Prop({ default: '' }) base!: string;
  @Prop({ default: '' }) object!: string;
  @Prop({ default: '' }) section!: string;
  @Prop({ default: '' }) element!: string;
  @Prop({ default: '' }) realm!: string;

  get link (): string {
    var lnk = '/'

    lnk += this.base + '/'
    if (this.object !== '') lnk += this.object + '/'
    lnk += this.section + '/'
    lnk += this.realm + '/'
    lnk += this.element

    return lnk
  }
}
</script>
