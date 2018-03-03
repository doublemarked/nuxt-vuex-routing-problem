import Vue from 'vue'

const MOCK_API = {
  users: [
    { id: 100, name: 'Clarence' },
    { id: 101, name: 'Herbert' },
    { id: 102, name: 'Melissa' },
  ],
}
async function delay(data) {
  return new Promise(resolve => setTimeout(() => resolve(data), 500))
}

export const state = () => ({
  users: {},
  active: null,
})

export const getters = {
  active: state => state.users[state.active],

  list: state => Object.keys(state.users).map(id => state.users[id]),
}

export const actions = {
  async reset({ commit }) {
    commit('reset')
  },
  async getAll({ commit }) {
    const users = await delay(MOCK_API.users)
    
    commit('setUsers', users)
  },
  async getOne({ commit }, id) {
    const user = await delay(MOCK_API.users.find(u => u.id === id))
    
    commit('setUsers', [user])
  },
  async activate({ commit }, id) {
    commit('setActiveUser', id)
  },
}

export const mutations = {
  reset(state) {
    state.users = {}
    state.active = null
  },
  setUsers(state, users) {
    users.forEach(u => Vue.set(state.users, u.id, { ...u }))
  },
  setActiveUser(state, id) {
    state.active = id
  },
}
