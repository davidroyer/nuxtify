import { set, toggle } from '@/utils/vuex'

export const state = () => ({
  isDev: null,
  drawer: false
})
export const mutations = {
  setDev(state, payload) {
    state.isDev = payload
  },
  toggleDrawer: toggle('drawer'),
  setDrawer: set('drawer')

  // setDrawer: (state, payload) => (state.drawer = payload)
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
