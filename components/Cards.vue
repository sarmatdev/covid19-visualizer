<template>
  <div class="cards">
    <div class="card">
      <h3 class="card__title">Confirmed</h3>
      <p class="card__data" v-if="data">{{ data.confirmed }}</p>
    </div>
    <div class="card">
      <h3 class="card__title">Recovered</h3>
      <p class="card__data" v-if="data">{{ data.recovered }}</p>
    </div>
    <div class="card">
      <h3 class="card__title">Deaths</h3>
      <p class="card__data" v-if="data">{{ data.deaths }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style lang="scss">
.cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;

  .card {
    padding: 2rem;
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.6);
    animation: fade 1s ease;
    -webkit-font-smoothing: antialiased;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    &:nth-child(1) {
      background-color: var(--color-blue);
    }
    &:nth-child(2) {
      background-color: var(--color-green);
    }
    &:nth-child(3) {
      background-color: var(--color-red);
    }

    &__title {
      font-weight: 300;
      font-size: 2rem;
    }

    &__data {
    }
  }
}
</style>
