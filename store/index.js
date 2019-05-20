export const state = () => ({
  menuExpanded: false,
})

export const mutations = {
  expandMenu(state) {
    state.menuExpanded = true
  }
}

// export const actions = {
//   selectSingleBlog({ commit }, postIndex) {
//     commit('currentBlog', postIndex)
//   }
// }
