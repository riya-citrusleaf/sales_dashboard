
import { defineStore } from "pinia"
import { ref } from "vue"
import { fetchSalesPerson } from "../Api/dashboardApi"

export const useFilterStore = defineStore("filters", () => {
  const salesPersons = ref([])

  const storeLocations = ref([
    { id: 1, store: "All Store" },
    { id: 2, store: "AB Road" },
    { id: 3, store: "Bhagirath Pura" }
  ])

  const selectedPerson = ref(null)
  const selectedStore = ref(storeLocations.value[0])
  const fromDate = ref("2026-08-24")
  const toDate = ref("2026-08-24")

  async function loadSalesPersons() {
    try {
      const response = await fetchSalesPerson({
        user: "harsh@bharatlifestylefurniture.com"
      })

      const persons =
        response?.message?.sales_persons ||
        response?.sales_persons ||
        []
      console.log("response message")
      salesPersons.value = persons.map((person, index) => ({
        id: index + 1,
        name: person.name,
        is_individual: Number(person.is_individual || 0),
        selectData: `${person.name}|${Number(person.is_individual || 0)}`
      }))

      if (salesPersons.value.length > 0) {
        selectedPerson.value = salesPersons.value
      }
    } catch (error) {
      console.error("Sales Person API Error:", error)
      salesPersons.value = []
      selectedPerson.value = null
    }
  }

  function setPerson(person) {
    selectedPerson.value = person
  }

  function setStore(store) {
    selectedStore.value = store
  }

  function setDateRange(from, to) {
    fromDate.value = from
    toDate.value = to
  }

  return {
    salesPersons,
    storeLocations,
    selectedPerson,
    selectedStore,
    fromDate,
    toDate,
    loadSalesPersons,
    setPerson,
    setStore,
    setDateRange
  }
})

