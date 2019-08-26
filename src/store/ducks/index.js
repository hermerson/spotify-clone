import { combineReducers } from 'redux';
import {reducer as podcasts} from '~/store/ducks/podcasts';
import {reducer as player} from '~/store/ducks/player';

const reducers = combineReducers({
  podcasts, 
  player,
});

export default reducers;
