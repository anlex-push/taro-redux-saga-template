import _ from 'lodash';
import { all } from 'redux-saga/effects';
import { allModules } from './config';

export default function* () {
    const allSage = _.map(allModules,v=>v.saga());
    yield all([
        ...allSage
    ])
}