import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SettingsScreen = ({navigation})  => {

  function navigateModal() {
    navigation.navigate('try');
    navigation.setOptions({ tabBarVisible:false })
  }

  return (
      <View>
          <View style={styles.profilePicContainer}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/proxy/WXWOptDbw8QrmJ6HhsQVoRpDvqXIFbrgkOtI71d2lKkkDQhQMweVha4VD1rDEFsmphVKogC26oYn39FBXeyiLROJSHdUdP0JzF2Dx8wc125wh886iyU"}}
              style={styles.img}
            />
            <Text style={styles.name}>Name</Text>
          </View>
          <View style={styles.settingsSection}>
            <View style={styles.settingsSectionButton}>
              <TouchableOpacity style={styles.button} onPress={navigateModal}>
                <Text>Dummy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsSectionButton}>
              <TouchableOpacity style={styles.button}>
                <Text>Dummy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsSectionButton}>
              <TouchableOpacity style={styles.button}>
                <Text>Dummy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsSectionButton}>
              <TouchableOpacity style={styles.button}>
                <Text>Dummy</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  fbButton: {
    marginTop: 100
  },
  profilePicContainer: {
    height: SCREEN_WIDTH * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },  
  img:{
    height: SCREEN_WIDTH * 0.5,
    width: SCREEN_WIDTH * 0.5,
    borderRadius: SCREEN_WIDTH * 0.5 / 2
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
  },
  settingsSection: {
    borderTopWidth: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  settingsSectionButton: {
    borderBottomWidth: 1,
    height: SCREEN_WIDTH * 0.15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});


export default SettingsScreen;
