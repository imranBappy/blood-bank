import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import useAuth from '../hooks/useAuth';
import '../styles/globals.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  const user = useAuth();
  useEffect(() => {
    store.dispatch({
      type: 'SET_USER',
      payload: {
        user,
      }
    })
  }, [])
  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
