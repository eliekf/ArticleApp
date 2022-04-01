import { Authenticate } from "../action/auth";
import {LOGIN, LOGOUT} from '../actions/auth';

const initialState = {accessToken: null};

export default (state = initialState, action) => {
    switch (action.type){
        case Authenticate:
            return {
                accessToken: action.accessToken,
            };
        case LOGOUT:
             return initialState;
             
        default: return state;
    }
};
