import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import useAuth from '../hooks/useAuth';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const user = useAuth();
  store.dispatch({
    type: 'SET_USER',
    payload: {
      user,
    }
  })
  console.log(user);
  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
