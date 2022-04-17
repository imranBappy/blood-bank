import * as Types from './types';

export const alertAction = alert => dispatch => {
    dispatch({
        type: Types.SET_ALERT,
        payload: alert
    })

}