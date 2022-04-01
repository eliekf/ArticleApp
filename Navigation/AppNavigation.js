import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../screens/AuthScreen';
import ArticleScreen from '../screens/ArticleScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth';


const Stack = createStackNavigator();

function AuthNavigator() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signin" component={AuthScreen} />
        <Stack.Screen
          name="articleScreen"
          component={ArticleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthNavigator;
