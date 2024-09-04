import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { Modal } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Modal animationType='fade' hardwareAccelerated={true} visible={modalVisible} onRequestClose={toggleModal}>
        <View style={styles.nestedView}>
          <Text style={styles.text}>This is a modal...</Text>
          <Pressable onPress={toggleModal}>
            <Text style={styles.smallerText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={toggleModal}>
      <Text style={styles.text}>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nestedView: {
    padding: 26,
    marginTop: 120,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
  },
  smallerText: {
    fontSize: 20,
    marginTop: 40,
  }
});
