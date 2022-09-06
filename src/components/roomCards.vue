<template>
  <div class="card" style="width: 21rem">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img v-bind:src="booking.image" class="d-block w-100" alt="It's " />
        </div>
        <div class="carousel-item">
          <img
            v-bind:src="booking.image_2"
            class="d-block w-100"
            alt="I'll put something in later"
          />
        </div>
        <div class="carousel-item">
          <img
            v-bind:src="booking.image_3"
            class="d-block w-100"
            alt="I'll put something in later 2nd"
          />
        </div>
        <!-- <button
          class="carousel-control-prev bg-dark"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next bg-dark"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ booking.name }}</h5>
        <p class="card-text">
          {{ booking.description }}
        </p>
        <div class="links">
          <router-link
            :to="{ name: 'singleView', params: { id: booking.room_id } }"
          >
            <!-- <router-link to="/singleView"> -->
            Go somewhere</router-link
          >
          <router-link to="/selectDate"> Reserve </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["rooms"],
  props: ["booking"],
};
</script>

<style>
.d-block {
  height: 21rem;
}
</style>
