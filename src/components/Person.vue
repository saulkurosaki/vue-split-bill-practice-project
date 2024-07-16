<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);
const paid = ref(false);
</script>

<template>
  <div>
    <div class="person-number"></div>
    <div class="person-to-pay"></div>
    <div class="paid"></div>
  </div>
</template>

<style scoped></style>
