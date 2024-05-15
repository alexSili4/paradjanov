<script setup>
import MapComponent from 'components/MapComponent.vue';

defineProps({
  isDesk: {
    type: Boolean,
    required: true,
  },
});
</script>

<template><MapComponent :isDesk="isDesk" /></template>

<style scoped></style>
