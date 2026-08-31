<script setup>
import { storeToRefs } from "pinia"
import { useFilterStore } from "../stores/useFilterStore"

const filterStore = useFilterStore()
const { salesPersons, storeLocations, selectedPerson, selectedStore, fromDate, toDate } =
  storeToRefs(filterStore)
</script>

<template>
  <div class="header">
    <div class="dashboard-title">
      <h2>Sales Dashboard</h2>
      <p v-if="selectedPerson">{{ selectedPerson.name }}</p>
    </div>
    <div class="dashboard-filters">
      <select v-model="selectedPerson" class="filter-select">
        <option v-for="person in salesPersons" :key="person.id" :value="person">
          {{ person.name }}
        </option>
      </select>
      <select v-model="selectedStore" class="filter-select">
        <option v-for="s in storeLocations" :key="s.id" :value="s">
          {{ s.store }}
        </option>
      </select>
      <div class="date-picker">
        <input type="date" v-model="fromDate" />
        <span>→</span>
        <input type="date" v-model="toDate" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 18px;
}
.dashboard-title {
  min-width: 250px;
}
.dashboard-title h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #172033;
}
.dashboard-title p {
  margin: 4px 0 0;
  font-size: 15px;
  color: #64748b;
}
.dashboard-filters {
  display: flex;
  align-items: center;
  gap: 10px;
}
.filter-select {
  height: 38px;
  min-width: 180px;
  padding: 0 12px;
  border: 1px solid #d9e0e8;
  border-radius: 6px;
  background: white;
  font-size: 13px;
  color: #334155;
  outline: none;
}
.filter-select:focus {
  border-color: #3b82f6;
}
.date-picker {
  height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  background: #2689e8;
  border-radius: 6px;
  color: white;
}
.date-picker input {
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-size: 13px;
}
</style>