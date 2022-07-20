<script setup lang="ts">
import { storeToRefs } from 'pinia'
import appStore from '@/store'

const { userInfo } = storeToRefs(appStore.userModule)
</script>

<template>
  <p>{{ userInfo.userName }}</p>
</template>

<style></style>
