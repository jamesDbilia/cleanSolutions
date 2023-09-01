import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production', // Devtools are enabled in non-production environments
});

export default store;
