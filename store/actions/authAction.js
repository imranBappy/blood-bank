import axios from 'axios';
import * as Types from './types';
import '../firebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
// import setAuthHeader from '../../utils/setAuthHeader';
export const registerAction = ({ name, email, password, ...rest }, history) => async dispatch => {
    try {
        const auth = getAuth();
        const db = getFirestore();
        const signup = async () => {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
            });
            const user = auth.currentUser;
            const _id = auth.currentUser.uid;
            const docRef = await addDoc(collection(db, "users"), {
                _id,
                ...rest
            });
            dispatch({
                type: Types.SET_USER,
                payload: {
                    auth: true,
                    user: user,
                    token: 'token'
                }
            })
            console.log(docRef);
            console.log(user);
        };
        await signup();


    } catch (err) {
        console.log({
            err
        });
        //         dispatch({
        //             type: Types.SET_ALERT,
        //             payload: { message: 'Server side error', error: true },
        //         });
    }
};

export const loginAction = ({ name, email, password, ...rest }, history) => async dispatch => {
    try {

        // const token = result.data.token;

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

        // history.push('/');
        // dispatch({
        //     type: Types.SET_USER,
        //     payload: {
        //         auth: true,
        //         user: user,
        //         token: 'token'
        //     }
        // })
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