<template>
  <div>
    <div v-if="user">
      <h1>This is the reservation page</h1>
      <p>
        Before continuing
        <button @click="refresh()">click me</button>
      </p>
      <div class="cards">
        <roomCards
          v-for="booking in room"
          :key="booking.room_id"
          :booking="booking"
        />
      </div>
    </div>
    <div v-else>
      <h1>Log in DUMBASS</h1>
    </div>
  </div>
</template>
<script>
import roomCards from "../components/roomCards.vue";
export default {
  components: {
    roomCards,
  },
  // props: ["room"],
  mounted() {
    this.$store.dispatch("getRooms");
  },
  computed: {
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    room() {
      // console.log(this.$store.state.rooms);
      return this.$store.state.rooms;
      window.location.reload();
    },
    refresh() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.stuff {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  margin: 0.5rem 0.5rem;
  /* display: flex; */
  /* height: ; */
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.links {
  display: flex;
  justify-content: space-evenly;
}
a {
  margin: 0 0.25rem;
}
</style>
