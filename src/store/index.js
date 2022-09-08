import { createStore } from "vuex";
import router from "@/router";
import createPeristedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    newUser: {},
    Token: null,
    user_type: null,
    rooms: null,
    room: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
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
        .then(() => context.commit("setUser", payload));
      console.log("data");
    },
    // Loop/show Review
    seeReview: async (context, payload) => {
      fetch("http://localhost:8008/reviews", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setUser", payload));
      console.log("data");
    },
    // All Rooms
    getRooms: async (context) => {
      fetch("https://capstone-booking-api.herokuapp.com/")
        .then((res) => res.json())
        .then((data) => context.commit("setRooms", data))
        .catch((err) => console.log(err.message));
    },
    // Single Room
    getSingleRooms: async (context, id) => {
      fetch("https://capstone-booking-api.herokuapp.com//" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setSingleRoom", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
  plugins: [createPeristedState()],
});
