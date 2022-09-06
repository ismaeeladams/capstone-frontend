<template>
<div class="room_card_holder" >
  <room
          v-for="room in rooms"
          :key="room.room_id"
          :room="room"
        />
</div>
</template>
<script>
import room from "../components/roomCards.vue"
export default {
  components:{
    roomCards,
  },
  mounted(){
    this.$store.dispatch("getRooms")
  },
};
</script>
<style></style>
