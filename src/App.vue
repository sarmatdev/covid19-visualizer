<template>
  <div>
    <Header />
    <section class="container">
      <Ratio />
    </section>
    <section class="container">
      <PieChart />
    </section>
  </div>
</template>

<script>
import Header from './components/Header';
import Ratio from './components/Ratio';
import PieChart from './components/PieChart';
export default {
  name: 'App',
  components: {
    Header,
    Ratio,
    PieChart
  }
};
</script>

<style lang="scss">
@import url('./assets/scss/main.scss');
</style>
