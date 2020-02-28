import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const Header = ({event})  => {

    const settingsState = useSelector(state => state.settings);
    const dispatch = useDispatch();

    return (
        <View style={styles.eventHeader} >
            <View style={styles.leftIcon}>
                <Text>{event.category}</Text>
                <Text>{event.name}</Text>
            </View>
            <View style={styles.rightIcon}>
                <Text>i</Text>
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
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5
  },

  rightIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


export default Header;
