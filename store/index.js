export const state = () => ({
  menuExpanded: false,
  albums: {},
})

export const mutations = {
  expandMenu(state) {
    state.menuExpanded = true
  },
  closeMenu(state) {
    state.menuExpanded = false
  },
  loadAlbums(state, albums) {
    state.albums = {
      albumData: albums
    }
  }
}

// export const actions = {
//   selectSingleBlog({ commit }, postIndex) {
//     commit('currentBlog', postIndex)
//   }
// }
