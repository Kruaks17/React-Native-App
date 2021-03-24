import React, {useState} from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';



export default function Header(){

    return(
        <View style={styles.header}>
            <View>
                <Text>Uppered</Text>
                <Text>Menu</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    header:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        
        color:'black',
        fontFamily: 'Helvetica',
        backgroundColor: 'orange'
        
    }

});
