//mutations 可以操作 必须同步不能进行异步操作 不然回调不可控
const mutations={
  ADD(state){
    state.solidsNumber+=1;
  },
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote),1)
    state.activeNote = state.notes[0] || {}
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}
export default mutations
