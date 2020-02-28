import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import LikedEventContainer from './likedEventContainer/LikedEventContainer';


const LikedEventsList = ({description})  => {

    const event = {
        name: "MyEvent",
        category: "Exhibition",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "https://lh3.googleusercontent.com/proxy/lnPJeu9oRDvOxuVk4W42KTGw7RmsoRXjrb4hWTGPNPLy3RS78Xbtf4houSpoRLUZoBvHszLwoyFY0wew-nePZgBKJZGRoTnhegzVBZZZGDEovK_voSY",
        location: "London",
        price: "7£",
        website: "www.google.com",
      }
    const events = [event,event,event,event,event,event]

  return (
      <View style={styles.descriptionContainer}>
        <Text style={{marginLeft: 5}}>Your Events</Text>
        <FlatList 
            data={events}
            renderItem={(item) => <LikedEventContainer event={item.item}/>}
            keyExtractor={item => item.id}
            style={{flex: 1}}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </View>
  );
};

const styles = StyleSheet.create({

  descriptionContainer: {
    marginTop:20,
    height: '4%'
  }

});


export default LikedEventsList;
