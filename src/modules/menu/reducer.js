import { fromJS } from 'immutable';
import { createReducer } from '../../store/store-helpers';
import { LOAD_MENU } from './actions';

const initialState = fromJS({});

const handlers = {
  [LOAD_MENU]: (state, payload) => state.mergeDeep(payload)
};

export default createReducer(initialState, handlers);
