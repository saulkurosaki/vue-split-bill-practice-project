<script setup>
import { getGrandTotal, store } from "../store/store";
import Label from "./Label.vue";
import Person from "./Person.vue";
</script>

<template>
  <div class="no-items" v-if="store.people.length === 0">No items</div>

  <div class="people-view" v-if="store.people.length > 0">
    <div class="header">
      <div>
        <Label title="total + tip: " :value="getGrandTotal()" />
      </div>

      <div>
        <Label title="Remaining: " :value="store.params.remaining" />
      </div>
    </div>

    <div class="people-container">
      <Person
        v-for="person in store.people"
        :key="person.id"
        :id="person.id"
        :number-of-person="person.numberOfPerson"
        :total-per-person="person.totalPerPerson"
        :paid="person.paid"
      />
    </div>
  </div>
</template>

<style scoped>
.no-items {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.people-view {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
