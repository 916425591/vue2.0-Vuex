const state = {
  contacts: false,
  rect: '',
  uuid: '',
  libraryView: [],
  library: []
}

const mutations = {
  'SET_CONTACTS' (state,bool) {
    state.contacts = bool.bool
  },
  'SET_RECT' (state,rect) {
    state.rect = rect.rect
  },
  'SET_UUID' (state,uuid) {
    state.uuid = uuid.uuid
  },
  'SET_LIBRARY' (state,library) {
    state.library = library
  },
  'CLEAR_LIBRARY' (state) {
    state.library = []
  },
  'ADD_LIBRARYVIEW' (state,t) {
    if (state.libraryView.find(e => e === t)) {
      state.libraryView = state.libraryView.filter(f => f !== t)
    } else {
      state.libraryView = [...state.libraryView, t]
    }
  },
  'FILTER_LIBRARY' (state,t) {
    state.libraryView = state.libraryView.filter(e => e !== t)
  }
}

export default {
  state,
  mutations
}
