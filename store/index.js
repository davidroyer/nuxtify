import navigationRoutes from '@/config/navigation'
import site from '@/config/site'

export const state = () => ({
  drawer: false,
  isDev: null,
  pageTitle: '',
  pageMeta: {},
  navigationRoutes,
  navMenu: {},
  site
})

export const mutations = {
  setDev: (state, payload) => (state.isDev = payload),
  setMenu: (state, payload) => (state.navMenu = payload),
  setPageTitle: (state, payload) => (state.pageTitle = payload),
  setPageMeta: (state, payload) => {
    state.pageMeta = payload
    state.pageTitle = payload.title
  },
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: (state, payload) => (state.drawer = !state.drawer)
}

export const actions = {
  nuxtServerInit({ commit, state }, { $cmsApi, isDev, app }) {
    commit('setMenu', $cmsApi.get('main-nav'))
    commit('setDev', isDev)
  }
}
