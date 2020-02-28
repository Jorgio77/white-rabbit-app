import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProfilesScreen = ({navigation})  => {

    const loginState = useSelector(state => state.login);
    const dispatch = useDispatch();

    return (
        <View style={styles.cardContainer}>

        </View>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: SCREEN_HEIGHT * 0.8,
    backgroundColor: '#D3D3D3',
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});


export default ProfilesScreen;
