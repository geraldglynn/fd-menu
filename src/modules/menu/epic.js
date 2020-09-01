import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { FETCH_MENU, loadMenu } from './actions';

import * as Api from './api';

export const getMenuEpic = action$ =>
  action$.pipe(
    ofType(FETCH_MENU),

    switchMap(Api.getMenu),

    map(loadMenu),

    catchError(error =>
      of({
        type: 'FETCH_MENU_FAILED',
        payload: error,
        error: true
      })
    )
  );
