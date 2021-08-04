<template>
    <m-header></m-header>
    <tab></tab>
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <router-view name="user" :style="viewStyle" v-slot="{ Component }">
    <transition appear name="slide">
      <keep-alive>
      <component :is="Component" />
    </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import Header from '@/components/header'
import Tab from '@/components/tab'
export default {
  components: {
    MHeader: Header,
    Tab
  },
  computed: {
    viewStyle() {
      return {
        bottom: 0
      }
    }
  }
}
</script>

<style lang="scss">

</style>
