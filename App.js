import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';

export default function App() {

  const [item, setItem]= useState([]);

  const addItem = (item) => {
    setItem([...items,item])
  };



  return (
    <>
    
    <View style={styles.container}>
    
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});