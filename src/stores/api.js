async function request<T>(
    method: string,
    args: Record<string, unknown>,
    verb: "GET" | "POST",
    signal?: AbortSignal,
): Promise<T> {
    const headers: Record<string, string> = {
        Accept: "application/json",
        "X-Frappe-Site-Name": window.location.hostname,
        // ADD THIS LINE BELOW:
        "Authorization": "token 58f1ea78d419afb:a366004a74c8aa5",
    };
  
}
const getKpiSummary = async () => {
  loading.value = true
  try {
    const response = await frappe.call({
      method:
        "bharat_lifestyle.bharat_lifestyle.sales_dashboard.get_kpi_summary.get_kpi_summary",

      args: {
        sales_person: selectedPerson.value.name,
        store: selectedStore.value.store,
        from_date: fromDate.value,
        to_date: toDate.value
      }

    })
}