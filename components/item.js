import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Item = ( ) => {

    const {item, index, removeItem}=props 


    return (

           <TouchableOpacity onPress={()=>{
               removeItem(index)
           }}>
               <Text>{item}</Text>
           </TouchableOpacity> 

    )



}