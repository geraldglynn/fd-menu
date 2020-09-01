import menuReducer from './menu/reducer'
import { getMenuEpic } from './menu/epic'

export const reducers  = {
    menuReducer
}

export const epics = [
    getMenuEpic
]