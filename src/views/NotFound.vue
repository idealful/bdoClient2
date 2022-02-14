<template></template>

<script setup>
// LifeCycle
import { onBeforeMount } from 'vue';

// Router
import { useRouter } from 'vue-router';
const router = useRouter();

onBeforeMount(() => {
  router.push('/');
});
</script>

<style></style>
