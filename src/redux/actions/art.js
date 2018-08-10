import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../data/art"

export const fetchArt = getAsyncAction({ actionTypePrefix: prefixes.ART+actionTypes.FETCH, asyncFunc: apis.fetchArt });