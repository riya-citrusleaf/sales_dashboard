const BASE_URL = "https://bls-erp.citrusleafhq.com"


export async function fetchKpiSummary({ sales_person, stores, from_date, to_date, is_individual }) {
  const url = new URL(
    `${BASE_URL}/api/method/bharat_lifestyle.bharat_lifestyle.sales_dashboard.get_kpi_summary.get_kpi_summary`
  )

  url.searchParams.set("sales_person", sales_person)
  url.searchParams.set("stores", JSON.stringify(stores))   // ✅ must be a JSON array, e.g. ["AB Road"]
  url.searchParams.set("from_date", from_date)
  url.searchParams.set("to_date", to_date)
  url.searchParams.set("is_individual", is_individual)

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "token 3f2197ea201dc09:05c36cfb991fe13",
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    const errText = await response.text()
    console.error("KPI API raw error:", errText)   // ✅ see the actual Frappe traceback
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.message || {}
}
export async function fetchSalesPerson({ user }) {
  const url = new URL(
    `${BASE_URL}/api/method/bharat_lifestyle.bharat_lifestyle.sales_dashboard.utils.all_allowed_sales_person`
  )
  url.searchParams.set("user", user)

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": "token 3f2197ea201dc09:05c36cfb991fe13",
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.message || []
}

//------Monthly Sales Trend 
export async function fetchSalesTrend({ sales_person, stores, from_date, to_date, is_individual }) {
  const url = new URL(
    `${BASE_URL}/api/method/bharat_lifestyle.bharat_lifestyle.sales_dashboard.api.get_sales_trend_date`
  )

  url.searchParams.set("sales_person", sales_person)
  url.searchParams.set("stores", JSON.stringify(stores))
  url.searchParams.set("from_date", from_date)
  url.searchParams.set("to_date", to_date)
  url.searchParams.set("is_individual", is_individual)

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "token 3f2197ea201dc09:05c36cfb991fe13",
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    const errText = await response.text()
    console.error("Sales Trend API raw error:", errText)
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.message || { data: [] }
}