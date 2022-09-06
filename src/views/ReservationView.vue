<template>
  <div>
    <div v-if="user">
      <h1>This is the reservation page</h1>
      <roomCards
          v-for="booking in room"
            :key="booking.room_id"
          :booking="booking"
        />
    </div>
    <div v-else>
      <h1>Log in DUMBASS</h1>
    </div>
  </div>
</template>
<script>
import roomCards from "../components/roomCards.vue"
export default {
  mounted(){
    this.$store.dispatch("getRoom")
  },
  computed: {
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    room() {
      console.log(this.$store.state.room);
      return this.$store.state.room;
    },
  },
  components:{
    roomCards,
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
  margin: 0.5rem 0;
}
.links {
  display: flex;
  justify-content: space-evenly;
}
a {
  margin: 0 0.25rem;
}
</style>
