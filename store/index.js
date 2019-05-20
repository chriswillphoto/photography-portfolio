export const state = () => ({
  menuExpanded: false,
})

export const mutations = {
  expandMenu(state) {
    state.menuExpanded = true
  },
  closeMenu(state) {
    console.log('test')
    state.menuExpanded = false
  }
}

// export const actions = {
//   selectSingleBlog({ commit }, postIndex) {
//     commit('currentBlog', postIndex)
//   }
// }
