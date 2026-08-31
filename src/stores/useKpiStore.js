import { defineStore } from "pinia"
import { ref, watch } from "vue"
import { useFilterStore } from "./useFilterStore"
import { fetchKpiSummary } from "../Api/dashboardApi"

export const useKpiStore = defineStore("kpi", () => {
  const loading = ref(false)
  const error = ref(null)
  const kpiData = ref({
    total_sales: 0,
    target: 0,
    achievement: 0,
    total_collections: 0,
    pending_collections: 0,
    active_leads: 0,
    backlog: 0,
    avg_ticket_size: 0,
    sales_order_count: 0,
    carry_forward: 0
  })
 console.log("kpi summary ")
 // useKpiStore.js
async function fetchKpiData() {
  const filters = useFilterStore()
  if (!filters.selectedPerson) return

  loading.value = true
  error.value = null
  try {
    const storesParam =
      filters.selectedStore.store === "All Store"
        ? filters.storeLocations
            .filter(s => s.store !== "All Store")
            .map(s => s.store)          // ✅ e.g. ["AB Road", "Bhagirath Pura", ...]
        : [filters.selectedStore.store] // ✅ e.g. ["AB Road"]

    kpiData.value = await fetchKpiSummary({
      sales_person: filters.selectedPerson.name,
      stores: storesParam,
      from_date: filters.fromDate,
      to_date: filters.toDate,
      is_individual: filters.selectedPerson.is_individual
    })
  } catch (err) {
    error.value = err
    console.error("KPI API Error:", err)
  } finally {
    loading.value = false
  }
}
 
  let unwatch = null
  function initKpiWatcher() {
    if (unwatch) return 
    const filters = useFilterStore()
    fetchKpiData() // initial load
    unwatch = watch(
      [
        () => filters.selectedPerson,
        () => filters.selectedStore,
        () => filters.fromDate,
        () => filters.toDate
      ],
      () => fetchKpiData()
    )
  }

  return { loading, error, kpiData, fetchKpiData, initKpiWatcher }
})