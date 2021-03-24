import React, {useState} from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';


const Main = () => {

    return (
        <View style={styles.container }>
            <View style={styles.header}>
                <Text style={styles.headerText}>Uppered</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#E3D0CA',
    },
    header:{
        /*backgroundColor:'white',*/
        alignItems:'flex-start',
        justifyContent:'center',
        padding:30,
    },
    headerText:{
        fontFamily: 'RadioGrotesk-Regular',
        fontSize: 100,
    }



});

export default Main;