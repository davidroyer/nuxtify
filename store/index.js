import navItems from '@/data/nav-items'
import site from '@/data/site'
import { set, toggle } from '@/utils/vuex'

export const state = () => ({
  drawer: false,
  isDev: null,
  navItems,
  site
})
export const mutations = {
  // setDev(state, payload) {
  //   state.isDev = payload
  // },

  setDev: (state, payload) => (state.isDev = payload),

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
