<template>
  <AppHeader />
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped></style>
