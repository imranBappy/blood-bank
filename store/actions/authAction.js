import axios from 'axios';
import * as Types from './types';
// import setAuthHeader from '../../utils/setAuthHeader';
// export const registerAction = (user, history) => async dispatch => {
//     try {
//         user.username = user.username.toLocaleLowerCase()
//         const result = await axios.post('https://b24win.herokuapp.com/user/register', user);
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: {
//                 message: result.data.message ? result.data.message : '',
//                 error: result.data.error ? true : false
//             }
//         })

//         if (!result.data.error) {
//             history.push('/login');
//         }
//     } catch (err) {
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: { message: 'Server side error', error: true },
//         });
//     }
// };

export const loginAction = (user, history) => async dispatch => {
    try {
        // const result = await axios.post('https://b24win.herokuapp.com/user/login', user);
        // const token = result.data.token;
        console.log(user);
        // if (token) {
        //     localStorage.setItem('token', token)
        //     setAuthHeader(token)
        // }
        // if (result.data.error) return dispatch({
        //     type: Types.SET_ALERT,
        //     payload: {
        //         message: result.data.message,
        //         error: true
        //     }
        // })
        // dispatch({
        //     type: Types.SET_ALERT,
        //     payload: {
        //         message: result.data.message,
        //         error: result.data.error
        //     }
        // })
        dispatch({
            type: Types.SET_USER,
            payload: {
                auth: true,
                user: user,
                token: 'token'
            }
        })
        history.push('/');
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'server side error',
                error: true
            }
        })
    }
}

// export const logoutAction = () => dispatch => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         localStorage.removeItem('token');
//     }
//     dispatch({
//         type: Types.SET_USER,
//         payload: {
//             auth: false,
//             user: {},
//             token: ''
//         }
//     })
//     dispatch({
//         type: Types.SET_ALERT,
//         payload: {
//             message: 'Logout successfully',
//             error: false
//         }
//     })
// }
// export const changePassAction = (pass) => async dispatch => {
//     try {
//         const result = await axios.put('https://b24win.herokuapp.com/user/login', pass);
//         const token = localStorage.getItem('token')
//         if (token) {
//             localStorage.removeItem('token');
//         }

//         dispatch({
//             type: Types.SET_USER,
//             payload: {
//                 auth: false,
//                 user: {},
//                 token: ''
//             }
//         })
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: {
//                 message: result.data.message,
//                 error: false
//             }
//         })
//     } catch (error) {
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: {
//                 message: 'Server Error',
//                 error: false
//             }
//         })
//     }
// }