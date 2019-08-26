import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators } = createActions({
    loadRequest: null,
    loadSucess: ['data'],
    loadFailure:null,
});

export const PodcastsTypes = Types;

export const INITIAL_STATE =  Immutable({
    data:[],
});

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOAD_SUCESS]: (state, action) => state.merge({data:action.data})
});

export default Creators;