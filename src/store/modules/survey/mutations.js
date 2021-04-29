import { getDefaultState } from './state'

export default {
  updateName: (state, name) => {
    state.name = name
  },
  updateGoals (state, goals) {
    state.goals = goals
  },
  updateDiet (state, diet) {
    state.diet = diet
  },
  updateDob (state, dob) {
    state.dob = dob
  },
  updateStep (state, step) {
    state.step = step
  },
  reset (state) {
    Object.assign(state, getDefaultState())
  }
}
