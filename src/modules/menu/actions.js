export const FETCH_MENU = 'FETCH_MENU'
export const LOAD_MENU = 'LOAD_MENU'

export const getMenu = payload => ({
    type: FETCH_MENU,
    payload
})

export const loadMenu = payload => ({
    type: LOAD_MENU,
    payload
})