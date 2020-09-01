export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, { type, payload }) {
    return handlers[type] ? handlers[type](state, payload) : state
  }
}
