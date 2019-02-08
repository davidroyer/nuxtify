// import navItems from '@/data/nav-items'
import site from '@/config/site'
import nav from '@/data/nav'

export const state = () => ({
  drawer: false,
  isDev: null,
  nav,
  site
})

export const mutations = {
  setDev: (state, payload) => (state.isDev = payload),

  setDrawer: (state, payload) => (state.drawer = payload),

  toggleDrawer: (state, payload) => (state.drawer = !state.drawer)
}

export const actions = {
  nuxtServerInit({ commit, state }, { isDev, app }) {
    commit('setDev', isDev)
  }
}

export const getters = {}
