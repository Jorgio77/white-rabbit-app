import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fbLogin, phoneLogin } from '../actions';

const LoginScreen = ({ navigation })  => {

    const loginState = useSelector(state => state.login);
    const dispatch = useDispatch();
    const { isLoggedIn, isNewUser, isLoggingIn } = loginState;
    console.log(loginState);

    useEffect(() => {
        if (isLoggedIn) {
            if (isNewUser) navigation.navigate("Main");
            else navigation.navigate("Main");
        }
    })

    return (
        <View style={styles.buttonContainer}>
        { 
            !isLoggingIn && 
            <View>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(fbLogin())}>
                    <Text style={styles.buttonText}> 
                        Continue with Facebook 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(phoneLogin(navigation))}>
                    <Text style={styles.buttonText}> 
                        Continue with Phone number 
                    </Text>
                </TouchableOpacity> 
            </View>
        }
        {
            isLoggingIn && 
            <ActivityIndicator size="large" color="#0000ff" />

        }
        </View>
    );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 10
  },
  buttonText: {
    fontSize: 20, 
    color: 'black', 
    marginRight: 10  
  }
});


export default LoginScreen;
