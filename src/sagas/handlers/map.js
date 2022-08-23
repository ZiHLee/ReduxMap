import {call, put, select} from 'redux-saga/effects';
import {setMap, addMap} from '../../actions/mapActions';
import {requestGetMap} from '../requests/map';

export function* handleGetMap(action) {
  try {
    const response = yield call(requestGetMap);
    const {data} = response;
    yield put(setMap(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddMap(action) {
  try {
    const state = yield select();
    const oldH = yield state.map.history.filter(data => {
      return data.city !== action.city;
    });
    //console.log([oldH]);
    //yield put(addMap([...oldH], action.city));
  } catch (error) {
    console.log(error);
  }
}
