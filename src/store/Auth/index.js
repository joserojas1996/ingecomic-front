import { ServiceApi } from "../../Services/auth";

const state = {
  user: null,
  loading: false,
  error: null,
  collageAuth: null,
  collageSession: [],
};

const actions = {
  async login({ commit, dispatch }, payload) {
    try {
      commit("loginBegin");
      await ServiceApi.getCookie();
      const response = await ServiceApi.post("api/login", payload);
      commit("loginSuccess", true);
      await dispatch("fetchUser");
      return response;
    } catch (err) {
      commit("loginErr", err);
      return err;
    }
  },
  async register({ commit, dispatch }, payload) {
    try {
      commit("loginBegin");
      await ServiceApi.getCookie();
      const response = await ServiceApi.post("api/register", payload);
      commit("loginSuccess", true);
      return response;
    } catch (err) {
      commit("loginErr", err);
      return err;
    }
  },
  async fetchUser({ commit }) {
    try {
      const data = (await ServiceApi.get("api/user")).data;
      commit("setUser", data);
      return data;
    } catch (error) {
      commit("setUser", null);
      return error;
    }
  },
  async logout({ commit }) {
    try {
      commit("logoutBegin");
      await ServiceApi.getCookie();
      const data = await ServiceApi.post("api/logout");
      commit("setUser", null);
      commit("logoutSuccess", null);
      return data;
    } catch (err) {
      commit("logoutErr", err);
    }
  }
};

const getters = {
  user: (state) => state.user,
  check: (state) => state.user !== null && state.user !== undefined,
  isLoading: (state) => state.loading,
  collageAuthUser: (state) => state.collageAuth,
  collageSession: (state) => state.collageSession,
};

const mutations = {
  SET_USER_COLLAGE_AUTH(state, payload) {
    state.collageAuth = payload;
  },
  SET_USER_COLLAGE_SESION(state, payload) {
    state.collageSession = payload;
  },
  setUser(state, user) {
    state.user = user;
  },
  loginBegin(state) {
    state.loading = true;
  },
  loginSuccess(state) {
    state.loading = false;
  },

  loginErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  logoutBegin(state) {
    state.loading = true;
  },

  logoutSuccess(state) {
    state.loading = false;
  },

  logoutErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters,
};
