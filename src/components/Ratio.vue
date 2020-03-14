<template>
  <section class="ratio">
    <div class="ratio__confirmed">
      <p class="ratio__procent">49.32%</p>
    </div>
    <div class="ratio__recovered">
      <p class="ratio__procent">50.58%</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ratio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  background-color: var(--color-white);

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__procent {
    color: var(--color-white);
    font-family: 'Azonix', sans-serif;
    font-size: 4rem;
  }

  &__confirmed {
    width: 49.32%;
    height: 100%;
    background: linear-gradient(
        90deg,
        var(--color-grey) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      var(--color-red);
  }
  &__recovered {
    width: 50.68%;
    height: 100%;
    background: linear-gradient(
        270deg,
        var(--color-grey) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      var(--color-blue);
  }
}
</style>
