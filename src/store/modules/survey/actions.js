import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ state }) {
    const body = JSON.stringify({
      user: {
        name: state.name,
        goals: state.goals,
        diet: state.diet,
        dob: state.dob
      }
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.post(`${API_URL}/users`, body, config)

    if (response.status === 201) {
      return { success: true }
    }

    return { success: false, error: response.statusText }
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
  },
  updateStep ({ commit }, step) {
    commit('updateStep', step)
  },
  reset ({ commit }) {
    commit('reset')
  }
}
