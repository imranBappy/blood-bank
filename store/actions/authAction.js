import * as Types from './types';
import '../firebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
export const registerAction = ({ name, email, password, ...rest }, history) => async dispatch => {
    try {
        const auth = getAuth();
        const db = getFirestore();
        const signup = async () => {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
            });
            const _id = auth.currentUser.uid;
            await addDoc(collection(db, "users"), {
                _id,
                ...rest
            });
        };
        await signup();

    } catch (err) {
        dispatch({
            type: Types.SET_ALERT,
            payload: { message: err.message, error: true },
        });
    }
};

export const loginAction = ({ email, password }, history) => async dispatch => {
    try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log({ email, password });
        console.log(user.user);
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //     setCurrentUser(user);
        //     setLoading(false);
        // });
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
        console.log(error);
        // dispatch({
        //     type: Types.SET_ALERT,
        //     payload: {
        //         message: 'server side error',
        //         error: true
        //     }
        // })
    }
}

export const logoutAction = () => dispatch => {
    const auth = getAuth();

    signOut(auth);

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
}
export const changePassAction = (user) => async dispatch => {
    try {
        const forgetPassword = async ({ email, password }) => {
            return await sendPasswordResetEmail(auth, email, {
                url: "http://localhost:3000/login",
            });
        };
        forgetPassword(user)
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'Server Error',
                error: false
            }
        })
    }
}