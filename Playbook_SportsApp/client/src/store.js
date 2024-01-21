import { createStore, applyMiddleware, compose } from 'redux';
// import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { configureStore } from '@reduxjs/toolkit';
// import todosReducer from './features/todos/todosSlice';
// import filtersReducer from './features/filters/filtersSlice.js';

const initialState = {};

const middleware = [thunk];

let reduxTools = compose(applyMiddleware(...middleware)/*,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);

if(process.env.NODE_ENV === 'production'){
    reduxTools = compose(applyMiddleware(...middleware));
}

const store = createStore(
    rootReducer,
    initialState,
    reduxTools
);

// export const store = configureStore({
//     reducer: {
//       todos: todosReducer,
//       filters: filtersReducer
//     }
//   })

export default store;