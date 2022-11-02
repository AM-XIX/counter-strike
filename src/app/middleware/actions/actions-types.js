import { SET_MESSAGE } from '../constants/actions';

export const set_message = payload => {
    return {
        type: SET_MESSAGE, payload
    }
};
