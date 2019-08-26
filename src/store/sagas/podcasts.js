import {call, put} from 'redux-saga/effects';
import api from '~/services/api';

import PodcastsActions from '~/store/ducks/podcasts';

export function* load(){
    console.log('load');
    try{
        const response = yield call(api.get);
        yield put(PodcastsActions.loadSucess(response.data));
    }catch(err){
        yield put(PodcastsActions.loadFailure());
        console.log(err);
    }
}