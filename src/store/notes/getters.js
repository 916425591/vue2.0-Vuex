/**
 * 在 ES6 里你可以这样写
 * export const getCount = state => state.count
 */
export const getCount = state => state.count

export const notes = state => state.notes

export const activeNote = state => state.activeNote

export const activeNoteText = state => state.activeNote.text
