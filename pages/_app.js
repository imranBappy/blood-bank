import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css';
import { useEffect } from 'react';
import { currentUserAction } from '../store/actions/authAction';
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth"
function MyApp({ Component, pageProps }) {
  const auth = getAuth();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      store.dispatch({
        type: 'SET_USER',
        payload: {
          user: JSON.parse(localStorage.getItem("user"))
        }
      })
    }
  }, [])

  onAuthStateChanged(auth, async (getUser) => {
    const { displayName, email, uid } = getUser || {};
    store.dispatch({
      type: "SET_USER",
      payload: {
        user: { displayName, email, uid }
      }
    })
    // data = { accessToken, displayName, email, uid }
    // const stateQuery = query(collection(db, "users"), where("_id", "==", uid));
    // const docSnap = await getDocs(stateQuery);
    // docSnap.forEach(u => {
    //     data = { ...data, ...u.data() }
    // })
  });


  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
