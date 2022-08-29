import { createStore } from "vuex";

export default createStore({
  state: {
    email: null,
    password: null,
    user: null,
    Token: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, Token) => {
      state.Token = Token;
    },
    // setUser: (state, user) => {
    //   state.user = user;
    // },
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
      let res = await fetch("http://localhost:8008/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("setToken", data.token);
        // Verify token
        //
        fetch("http://localhost:8008/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setUser", data);
            // router.push("/users");
            // console.log(data);
          });
      } else {
        alert(data);
      }
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

    // Review
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
});
