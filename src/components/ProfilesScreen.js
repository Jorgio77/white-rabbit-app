import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const ProfilesScreen = ({navigation})  => {

    const loginState = useSelector(state => state.login);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>ProfilesScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  fbButton: {
    marginTop: 100
  }
});


export default ProfilesScreen;
