const types = {
    TOGGLE_NAVBAR: 'TOGGLE_NAVBAR',
  }
  
  export const state = () => ({
    isNavOpen: false,
    
  })
  
  export const mutations = {
    [types.TOGGLE_NAVBAR](state) {
      state.isNavOpen = !state.isNavOpen;
    },
  }
  
  export const actions = {
    toggleNav({ commit, state }) {
      commit(types.TOGGLE_NAVBAR);
    },
  }
  
  export const getters = {
    isNavOpen: state => state.isNavOpen,
  }