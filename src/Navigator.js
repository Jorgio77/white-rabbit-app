import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';
import EventsScreen from './components/EventsScreen';
import ProfilesScreen from './components/ProfilesScreen';
import ChatScreen from './components/ChatScreen';

export default function Navigator() {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const MainNavigator = () => {
        return (
            <Tab.Navigator initialRouteName={"Events"}>
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Events" component={EventsScreen} />
                <Tab.Screen name="Profiles" component={ProfilesScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
            </Tab.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Login" component={LoginScreen} options={{tabBarVisible:false, showLabel: false}}/>
                <Stack.Screen name="Main" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}