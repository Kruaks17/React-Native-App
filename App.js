import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';

import Main from './components/Main';


export default function App() {

  const [item, setItem]= useState([]);

  const addItem = (item) => {
    setItem([...items,item])
  };



  return (
    <Main>
    <View style={styles.container}>
        
    </View> 
    </Main>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E3D0CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});