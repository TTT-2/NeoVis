<template>
  <router-link :to="link" class="inline-block w-full">
    <span :class="'inline-block w-3 h-3 mr-2 rounded-sm ' + realmColor"></span>
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

enum Realm {
  Client = 'client',
  Server = 'server',
  Shared = 'shared'
}

@Component
export default class RealmInfoRouterLink extends Vue {
  @Prop({ default: '' }) object: string;
  @Prop({ default: '' }) section: string;
  @Prop({ default: '' }) element: string;
  @Prop({ default: null }) realm: Realm;

  get realmColor (): string {
    switch (this.realm) {
      case Realm.Client:
        return 'bg-realm-client'
      case Realm.Server:
        return 'bg-realm-server'
      default:
        return 'bg-realm-shared'
    }
  }

  get link (): string {
    var lnk = '/'

    if (this.object !== '') lnk += this.object + '/'

    lnk += this.section + '/'
    lnk += this.element

    return lnk
  }
}
</script>
