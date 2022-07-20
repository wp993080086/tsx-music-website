<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <h1>登录</h1>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
  <el-date-picker v-model="value" type="date" placeholder="Pick a day" />
</template>

<style></style>
