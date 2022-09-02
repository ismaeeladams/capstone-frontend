<template>
  <div>
    <h1>this is the checkout view page</h1>
  </div>
  <div class="container container-fluid">
    <div class="left_hand">
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Exp date" required />
      <input type="text" placeholder="CCV" required />
      <button type="submit" class="button">Register</button>
    </div>
    <div class="right_hand">
      <p>
        on this side would be where the reservation infomation will be display
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
}
</style>
