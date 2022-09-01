import { createStore } from "vuex";
import router from "@/router";
import createPeristedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    Token: null,
    user_type:null
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, Token) => {
      state.Token = Token;
    },
    Logout(state) {
      (state.user = null), (state.Token = null),(state.user_type = null);
    window.location.reload();
    },
  },
  actions: {
    // Login
    // login: async (context, payload) => {
    //   const { email, password } = payload;
    //   const response = await fetch(
    //     `http://localhost:8008/users/?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   if (userData.length) {
    //     context.commit("setUser", userData);
    //   }
    //   if (!userData.length) return alert("No user found");
    // },
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
        await fetch("https://capstone-booking-api.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${tokendata.token}`,
          },
        })
          .then((res) => res.json())
          .then((userdata) =>  {
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
      fetch("http://localhost:8008/reviews", {
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
  },

  // Loop/show Review
  seeReview: async (context, payload) => {
    fetch("http://localhost:8008/reviews", {
      method: "GET",
      body: JSON.stringify(payload),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.commit("setUser", payload));
    console.log("data");
  },
  modules: {},
  plugins: [createPeristedState()],
});
