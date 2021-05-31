import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Container from '../style-components/container';
import { AntDesign } from '@expo/vector-icons';

const Input = (props) => {

    const [value, setValue] = useState("");
    const { addItem } = props;

    const handleAddItem = () => {
        addItem(value)
        setValue("");
    };
    
    return (
        <Container>
            <TextInput style={styles.input} placeholder="Legg til i listen"
                onChangeText={(text) => { setValue(text) }} value={value} >
            </TextInput>
            <TouchableOpacity style={styles.touch} onPress={handleAddItem}>
            <AntDesign name="pluscircleo" size={44} color="black" />
            </TouchableOpacity>
        </Container>
    )
}
const styles = StyleSheet.create({

    input: {
        color: 'black',
        padding: 5,
        height: 45,
        borderWidth: 3,
        borderRadius: 50,
        fontFamily: 'Telegraf-Regular',
        fontSize: 20,
        textAlign: 'center',
        width: 250,
    },
    placeholder: {
        justifyContent: 'center',
    },
    touch: {
        padding: 10,
        fontFamily: 'Telegraf-Regular',
        fontSize: 20,
    }

})

export default Input;