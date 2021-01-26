import { delay, put, takeLatest} from 'redux-saga/effects'
import { addAction, asyncAddAction } from './action';

function* asyncAddRequest (action:ReturnType<typeof asyncAddAction>) {
  const { timeout } = action.payload
  yield delay(timeout);
  yield put(addAction());
}


export default function* () {
  yield takeLatest(asyncAddAction.match, asyncAddRequest)
}
