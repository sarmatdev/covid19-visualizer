<template>
  <header class="header">Covid-19 Visualizer</header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  font-family: 'Azonix', sans-serif;
  font-size: 5rem;
  text-align: center;
  word-wrap: break-word;
  animation: show 0.8s ease-in-out;
}

@keyframes show {
  0% {
    transform: translateY(-10rem);
  }

  50% {
    transform: translateY(2rem);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
