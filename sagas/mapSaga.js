import {takeLatest} from 'redux-saga/effects';
import { handleGetMap, handleAddMap } from './handlers/map';
import { GET_MAP, ADD_MAP } from '../actions/mapActions'

export function*  watcherSaga() {
    yield takeLatest(GET_MAP, handleGetMap);

    yield takeLatest(ADD_MAP, handleAddMap);
}