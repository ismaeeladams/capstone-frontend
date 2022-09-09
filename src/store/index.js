import { createStore } from "vuex";
import router from "@/router";
import createPeristedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    users: null,
    review: null,
    Token: null,
    user_type: null,
    rooms: null,
    room: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setReview: (state, review) => {
      state.review = review;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setRooms: (state, rooms) => {
      state.rooms = rooms;
    },
    setSingleRoom: (state, room) => {
      state.room = room;
    },
    setToken: (state, Token) => {
      state.Token = Token;
    },
    Logout(state) {
      (state.user = null), (state.Token = null), (state.user_type = null);
      state.rooms = null;
      // window.location.reload();
    },
  },
  actions: {
    login: async (context, payload) => {
      console.log(payload);
      let res = await fetch(
        "https://capstone-booking-api.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let tokendata = await res.json();
      console.log(tokendata.token);
      if (tokendata.token) {
        context.commit("setToken", tokendata.token);
        // Verify token
        //
        await fetch(
          "https://capstone-booking-api.herokuapp.com/users/users/verify",
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${tokendata.token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((userdata) => {
            context.commit("setUser", userdata.user);
            // router.push("/");
            // console.log(data);
          });

        window.location.reload();
      } else {
        alert(tokendata);
      }
    },
    // Register
    register: async (context, user) => {
      fetch("https://capstone-booking-api.herokuapp.com/users/register", {
        // fetch("http://localhost:8008/users/register", {
        method: "POST",
        body: JSON.stringify(user),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      console.log("data");
    },
    // Create Review
    reviews: async (context, payload) => {
      fetch("https://capstone-booking-api.herokuapp.com/reviews", {
        method: "POST",
        body: JSON.stringify(payload),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.commit("setReview", payload));
      console.log("data");
    },
    // All Rooms
    getRooms: async (context) => {
      fetch("https://capstone-booking-api.herokuapp.com/rooms")
        .then((res) => res.json())
        .then((data) => context.commit("setRooms", data))
        .catch((err) => console.log(err.message));
    },
    // Single Room
    getSingleRooms: async (context, id) => {
      fetch("https://capstone-booking-api.herokuapp.com/rooms/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setSingleRoom", data))
        .catch((err) => console.log(err.message));
    },
    // Create Rooms
    createRooms: async (context, room) => {
      fetch("https://capstone-booking-api.herokuapp.com/rooms", {
        method: "POST",
        body: JSON.stringify(room),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getRooms", room));
      console.log(room);
    },
    // Create Rooms
    editRooms: async (context, room) => {
      fetch("https://capstone-booking-api.herokuapp.com/rooms/" + id, {
        method: "PUT",
        body: JSON.stringify(room),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getRoom", room));
      console.log(room);
    },
    // Create Rooms
    deleteRooms: async (context, room) => {
      fetch("https://capstone-booking-api.herokuapp.com/rooms/" + id, {
        method: "DELETE",
        body: JSON.stringify(room),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getRoom", room));
      console.log(room);
    },
    // All Users
    getUsers: async (context) => {
      fetch("https://capstone-booking-api.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
  plugins: [createPeristedState()],
});
