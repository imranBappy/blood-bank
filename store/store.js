import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
const middleware = [thunk]
// let store = createStore(reducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// let store = createStore(reducer, compose(applyMiddleware(...middleware), typeof window !== "undefined"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
//     : null))


// const store = createStore(reducer, compose(applyMiddleware(...middleware), typeof window !== "undefined"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
//     : null));


const store = createStore(reducer, compose(applyMiddleware(...middleware)))

export default store;