import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    const body = {}
    const config = { headers: {} }
    return axios.post(`${API_URL}/users`, body, config)
  },
  updateName ({ commit }, name) {
    commit('updateName', name)
  },
  addGoals ({ commit, state }, goal) {
    const newGoals = [...state.goals, goal]
    commit('updateGoals', newGoals)
  },
  removeGoals ({ commit, state }, goal) {
    const newGoals = state.goals.filter(g => g !== goal)
    commit('updateGoals', newGoals)
  },
  updateDiet ({ commit }, diet) {
    commit('updateDiet', diet)
  },
  updateDob ({ commit }, dob) {
    commit('updateDob', dob)
  }
}
