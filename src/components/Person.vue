<script setup>
import { defineProps, ref } from "vue";
import { pay } from "../store/store.js";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);
const paid = ref(false);

const handleChange = (e) => {
  paid = e.target.value;

  pay(props.id, paid);
};
</script>

<template>
  <div :class="['person', person.paid ? 'person-paid' : 'person-no-paid']">
    <div class="person-number">Person {{ props.numberOfPerson }}</div>
    <div class="person-to-pay">
      {{
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.totalPerPerson)
      }}
    </div>
    <div class="paid">
      <input type="checkbox" name="" id="" @change="handleChange" /> Paid
    </div>
  </div>
</template>

<style scoped></style>
