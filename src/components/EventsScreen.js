import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../actions';


const EventsScreen = ({navigation})  => {

    const loginState = useSelector(state => state.login);
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch(logOut(navigation))}>
              <Text style={styles.buttonText}> 
                  LogOut
              </Text>
          </TouchableOpacity>
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


export default EventsScreen;
