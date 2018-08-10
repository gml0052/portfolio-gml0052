import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants"

import getAsyncActionReducers from "./asyncActionReducer";

const artReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.ART,
    objectsInitialState: initialState.art,
    isFetchingInitialState: initialState.isFetchingArt
});

export default combineReducers({
    art: artReducers.objectsReducer,
    isFetchingArt: artReducers.isFetchingReducer,
});