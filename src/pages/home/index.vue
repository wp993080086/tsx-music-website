<script setup lang="ts">
import HelloWorld from '@/components/helloWorld.vue'
import Box from '@/components/layout/container'
import { storeToRefs } from 'pinia'
import appStore from '@/store'

const { userInfo } = storeToRefs(appStore.userModule)
</script>

<template>
  <HelloWorld msg="Hello Vite" />
  <Box />
  <p>{{ userInfo.userName }}</p>
</template>

<style></style>
