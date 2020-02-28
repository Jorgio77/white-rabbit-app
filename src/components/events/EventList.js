import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import EventContainer from './eventContainer/EventContainer';


const EventList = ({description})  => {

    const event = {
        name: "MyEvent",
        category: "Exhibition",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img: "https://lh3.googleusercontent.com/proxy/WXWOptDbw8QrmJ6HhsQVoRpDvqXIFbrgkOtI71d2lKkkDQhQMweVha4VD1rDEFsmphVKogC26oYn39FBXeyiLROJSHdUdP0JzF2Dx8wc125wh886iyU",
        location: "London",
        price: "7£",
        website: "www.google.com",
      }
    const events = [event,event,event,event,event,event]

  return (
      <View style={styles.descriptionContainer}>
        <Text style={{marginLeft: 5}}>Events this week:</Text>
        <FlatList 
            data={events}
            renderItem={(item) => <EventContainer event={item.item} />}
            keyExtractor={item => item.id}
            style={{flex: 1}}
        />
      </View>
  );
};

const styles = StyleSheet.create({

  descriptionContainer: {
      marginTop: 10,
      flex: 1
  }

});


export default EventList;
