import { Frame, Scroll } from 'framer';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Header, TouchableOpacity, Linking } from 'react-native';
import Input from './input';
import Item from './item';


const Main = () => {

    const [item, setItem] = useState();

    const addItem = (item) => {
        setItem([...items, item])
    };
    const handleRemove = (index) => {
        setTodos(item.filter((item, x)=>{
          return index !== x;
        })
        );
      };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Dag</Text>
                <Text style={styles.headerText}>Dato</Text>
            </View>
            <Input addItem={addItem}/>
            <Scroll style={styles.scroll}
            wheelEnabled={true} direction="horizontal"
            height={500} width={500}>
                <Frame size={1000}>Hello</Frame>
            </Scroll>
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
        fontFamily: 'RadioGrotesk-Regular',
        fontSize: 70,
    },
    
});

export default Main;