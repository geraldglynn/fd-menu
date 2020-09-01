import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import Im from 'immutable';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { reducers, epics } from 'modules';

const initialState = Im.fromJS({});

const rootReducer = combineReducers({ ...reducers });
const epic = combineEpics(...epics);

const epicMiddleware = createEpicMiddleware();

const enchancer = compose(
  applyMiddleware(epicMiddleware),
  process.env.NODE_ENV !== 'production' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enchancer);
  epicMiddleware.run(epic);
  return store;
}
