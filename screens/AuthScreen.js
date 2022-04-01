import React, { useState, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Image,
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



import *  as authActions from '../store/action/auth';
import Input from '../components/Input';
import Field from '../components/Field';


const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
  return state;
 };
};

 const AuthScreen = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);

  

  

  const loginAuth = async () => {
    if (
      (username != null) && (password != null)
    ) {
      setIsFetchingData('true');
      setError('');
      try {
        await dispatch(authActions.login(username, password)).then(() => {
          setIsFetchingData(false);
          props.navigation.navigate('articleScreen');
        });
      } catch (err) {
        setError(err.message);
        setIsFetchingData(false);
      }
    }
  };



  return (
      <View>
        <Image source={require('../models/assests/images/Untitled.png')} 
        style={styles.image}
        resizeMode="contain"
        />
        

          <Field style={styles.authContainer}>
            <ScrollView>
              <Input
                id="username"
                label="Username"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorMessage="Please enter a valid username."
                onInputChange={() => { } }
                initialValue="" />
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter a valid password."
                onInputChange={() => { } }
                initialValue="" />
              <View style={styles.buttonContainer}>
                <Button title="Login" onPress={loginAuth}  color={`#00bfff`} />
              </View>
            </ScrollView>
          </Field>
          </View>
  );
};

// AuthScreen.navigationOptions = {
//   headerTitle: 'Authenticate'
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
    
  },
  image: {
    width: '80%',
    height: 300,
    marginBottom: 20,
    
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  }
});

export default AuthScreen;
