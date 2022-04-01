import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import AuthScreen from './screens/AuthScreen';
import ArticleScreen from './screens/ArticleScreen';
import AppNavigation from './Navigation/AppNavigation';




const store = createStore(applyMiddleware(ReduxThunk));


function App() {

  return (
    <Provider store={store}>
    <AppNavigation />
    </Provider>
  );
}
export default App;
