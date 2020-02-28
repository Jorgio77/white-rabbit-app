import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EventModal from '../eventModal/EventModal'

const SCREEN_WIDTH = Dimensions.get('window').width;

const LikedEventContainer = ({event})  => {

  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false);

  function changeModal() {
    setModal(!modal);
  }

  return (
    <View>
      <TouchableOpacity onPress={changeModal}>
        <View style={styles.likedEventContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: event.img}}
              style={styles.img}
              onLoad={() => setLoading(false)}
            />
            {loading && <ActivityIndicator style={styles.loading}/>}
          </View>
          <Text style={styles.title}>{event.name}</Text>
        </View>
      </TouchableOpacity>
      <EventModal visible={modal} event={event} closeModal={changeModal} />
    </View>

  );
};

const styles = StyleSheet.create({

  likedEventContainer: {
    height: '20%',
    marginTop: 10,
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.23,
    height: SCREEN_WIDTH * 0.25,
    alignItems: 'center',
  },

  imgContainer: {
    width: SCREEN_WIDTH * 0.195,
    height: SCREEN_WIDTH * 0.195,
    borderRadius: SCREEN_WIDTH * 0.195 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3'
  },
  
  img: {
    width: SCREEN_WIDTH * 0.18,
    height: SCREEN_WIDTH * 0.18,
    borderRadius: SCREEN_WIDTH * 0.18 / 2,
  },

  loading: {
    position: 'absolute',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',
  },
  
  title: {
    marginTop: 3
  }

});


export default LikedEventContainer;
