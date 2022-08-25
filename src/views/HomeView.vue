<template>
  <div class="home">
    <h1>This is the Home page!!!</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  -webkit-animation: colorchange 10s infinite alternate;
  animation: colorchange 10s infinite alternate;
}

@keyframes colorchange {
  0% {
    color: #ffce3f;
  }
  10% {
    color: #4861ad;
  }
  20% {
    color: #6a45a2;
  }
  30% {
    color: #88ceb8;
  }
  40% {
    color: #0f0f0f;
  }
  50% {
    color: #ffce3f;
  }
  60% {
    color: #4861ad;
  }
  70% {
    color: #6a45a2;
  }
  80% {
    color: #88ceb8;
  }
  90% {
    color: #0f0f0f;
  }
  100% {
    color: #6a45a2;
  }
}
</style>
