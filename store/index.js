export const state = () => ({
  isDev: null,
  drawer: false
})

export const mutations = {
  setDev(state, payload) {
    state.isDev = payload
  },

  setDrawer: (state, payload) => (state.drawer = payload)
}

export const actions = {
  nuxtServerInit({ commit, state }, { isDev, app }) {
    commit('setDev', isDev)

    // if (isDev) {
    //     await app.$wp.setupCustomRoutes();
    //   }
  }
}

export const getters = {}
