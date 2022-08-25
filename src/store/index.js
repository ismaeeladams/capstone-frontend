import { createStore } from "vuex";

export default createStore({
  state: {
    email: null,
    password: null,
    user: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    // Login
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:8008/users/?email=${email}&password=${password}`
      );
      const userData = await response.json();
      if (userData.length) {
        context.commit("setUser", userData);
      }
      if (!userData.length) return alert("No user found");
    },

    // Register
    register: async (context, user) => {
      fetch("http://localhost:8008/users/register", {
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
  },
});
