<script setup>
import { storeToRefs } from "pinia"
import { useKpiStore } from "../stores/useKpiStore"

const kpiStore = useKpiStore()
const { kpiData, loading } = storeToRefs(kpiStore)
</script>

<template>
  <div class="cards">
    <div class="card">
      <div class="card-title">TOTAL SALES</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.total_sales }}</span>
      </div>
      <div class="card-subtitle">Target ₹{{ kpiData.target }}</div>
    </div>
    <div class="card">
      <div class="card-title">ACHIEVEMENT %</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ kpiData.achievement_pct }}%</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">TOTAL COLLECTIONS</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.collections }}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">PENDING COLLECTIONS</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.outstanding }}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">ACTIVE LEADS</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ kpiData.active_leads }}</span>
      </div>
    </div>
  </div>

  <div class="cards">
    <div class="card">
      <div class="card-title">BACKLOG</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.backlog }}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">AVG TICKET SIZE</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.ticket_size }}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">SALES ORDER COUNT</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ kpiData.order_count }}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">CARRY FORWARD</div>
      <div class="card-value">
        <span v-if="loading">Loading...</span>
        <span v-else>₹{{ kpiData.carry_forward }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}
.card {
  min-height: 115px;
  padding: 20px 24px;
  background: white;
  border: 1px solid #e1e7ef;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
}
.card-title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #60718d;
}
.card-value {
  margin-top: 18px;
  font-size: 20px;
  font-weight: 700;
  color: #172033;
}
.card-subtitle {
  margin-top: 18px;
  font-size: 13px;
  color: #64748b;
}
</style>
