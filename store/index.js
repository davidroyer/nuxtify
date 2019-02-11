import navigationRoutes from '@/config/navigation'
import site from '@/config/site'

export const state = () => ({
  drawer: false,
  isDev: null,
  navigationRoutes,
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
