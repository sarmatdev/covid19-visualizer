<template>
  <section class="container">
    <header class="header">
      <h1 class="header__title">🦠Covid-19 Vizualizer</h1>
    </header>
    <Cards :data="cardData" />
    <PieChart
      :data="data"
      :options="{ responsive: true, maintainAspectRatio: false }"
    />
  </section>
</template>

<script>
import PieChart from '@/components/Charts/pie-chart';
import Cards from '@/components/Cards';
export default {
  props: ['data', 'cardData'],
  components: {
    PieChart,
    Cards
  }
};
</script>

<style></style>
