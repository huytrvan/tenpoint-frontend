export const state = () => ({
  title: ''
})

export const mutations = {
  updateTitle(state, title) {
    state.title = title
  }
}