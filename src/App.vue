<template>
  <div>
    <Header />
    <section class="container">
      <Ratio />
    </section>
  </div>
</template>

<script>
import Header from './components/Header';
import Ratio from './components/Ratio';
export default {
  name: 'App',
  components: {
    Header,
    Ratio
  }
};
</script>

<style lang="scss">
@import url('./assets/scss/main.scss');
</style>
