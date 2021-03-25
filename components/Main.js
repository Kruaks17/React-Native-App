import React, { useState } from 'react';
import { StyleSheet, Text, View, Header, TouchableOpacity, Linking } from 'react-native';
import Input from './input';


const Main = () => {

    const [item, setItem] = useState();

    const addItem = (item) => {
        setItem([...items, item])
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Uppered</Text>
            </View>
            <Input addItem={addItem}/>
            <View style={styles.footer}>
            </View>
        </View>
        
        </>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E3D0CA',
    },
    header: {
        
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        marginTop: 30,

    },
    headerText: {
        fontFamily: 'Telegraf-Bold',
        fontSize: 70,
    },
    
});

export default Main;