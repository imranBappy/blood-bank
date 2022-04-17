import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import useAuth from '../hooks/useAuth';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  // store.dispatch({
  //   type: 'SET_USER',
  //   payload: {
  //     auth: true,
  //     user: res.data.data.length ? res.data.data[0] : {},
  //     token
  //   }
  // })
  const user = useAuth();
  console.log(user);
  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
