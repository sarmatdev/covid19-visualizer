<template>
  <div>
    <div class="container">
      <Header />
      <PieChart :data="pieChartData" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import BarChart from '@/components/Charts/bar-chart';
import PieChart from '@/components/Charts/pie-chart';
export default {
  components: {
    Header,
    BarChart,
    PieChart
  },
  async fetch({ store }) {
    await store.dispatch('pie/getData');
  },
  computed: {
    pieChartData() {
      return this.$store.getters['pie/data'];
    }
  }
};
</script>

<style></style>
