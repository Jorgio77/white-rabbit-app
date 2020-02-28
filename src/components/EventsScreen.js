import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import EventList from './events/EventList';
import LikedEventsList from './events/LikedEventsList';



const EventsScreen = ({navigation})  => {

  const settingsState = useSelector(state => state.settings);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View>
        <LikedEventsList />
        <EventList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});


export default EventsScreen;
