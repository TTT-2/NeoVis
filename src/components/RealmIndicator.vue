<template>
  <span :class="'inline-block w-3 h-3 mr-2 rounded-sm ' + realmColor"></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

enum Realm {
  Client = 'client',
  Server = 'server',
  Shared = 'shared'
}

@Component
export default class RealmIndicator extends Vue {
  @Prop({ default: Realm.Shared }) realm!: Realm;

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
}
</script>

<style lang="scss" scoped>
  .bg-realm-client {
    background-color: #d3a10c;
  }

  .bg-realm-server {
    background-color: #14b0f8;
  }

  .bg-realm-shared {
    background-image: linear-gradient(45deg, #d3a10c 50%, #14b0f8 50.001%);
  }
</style>
