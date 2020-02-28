import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';

const EventModal = ({visible, event, closeModal}) => {

    return (
        <Modal 
            visible={visible}
            animationType="slide"
        >
            <View style={styles.container}>
                <Text>{event.name}</Text>
            </View>
            <TouchableOpacity onPress={closeModal}>
                <Text>CLOSE</Text>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 100
    }
});

export default EventModal;