/**
 * Created by domon on 2017/11/30.
 */
import { STORAGE_KEY } from './auth'

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    const syncedData = { auth: state.auth }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))

    if (mutation.type === 'WEB_ALL_DATA') {
      localStorage.removeItem(STORAGE_KEY)
    }
  })
}

// TODO: setup env
// export default process.env.NODE_ENV !== 'production' ? [localStoragePlugin] : [localStoragePlugin]
export default [localStoragePlugin]
