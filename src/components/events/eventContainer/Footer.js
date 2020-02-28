import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const Footer = ({event})  => {

    const settingsState = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const { price, location } = event;

    return (
        <View style={styles.eventHeader} >
            <View style={styles.leftIcon}>
                <Text>L</Text>
            </View>
            <View style={styles.centerIcon}>
                <Text>{location}</Text>
                <Text>{price}</Text>
            </View>
            <View style={styles.rightIcon}>
                <Text>R</Text>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({

  eventHeader: {
    height: '12%',
    flexDirection: 'row'
  },

  leftIcon: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerIcon: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rightIcon: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


export default Footer;
