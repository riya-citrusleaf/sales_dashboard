<script setup>
import { onMounted } from "vue"
import { useFilterStore } from "./stores/useFilterStore"
import { useKpiStore } from "./stores/useKpiStore"
import DashboardHeader from "./component/dashboardHeader.vue"
import KpiCards from "./component/KpiCard.vue"
const filterStore = useFilterStore()
const kpiStore = useKpiStore()

onMounted(async () => {
  await filterStore.loadSalesPersons()

  if (filterStore.salesPersons.length > 0) {
    filterStore.setPerson(filterStore.salesPersons[0])
  }

    kpiStore.initKpiWatcher() 
})




</script>

<template>

  <div class="dashboard">
    <DashboardHeader />
    <KpiCards />
  
  </div>

</template>
<style scoped>
.dashboard {
  padding: 24px;
  background: #f8fafc;
  min-height: 100vh;
}
</style>