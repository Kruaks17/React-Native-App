import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Input = (props) => {

    const [value, setValue] =useState("");
    const {addTodo} =props;
    
    const handleAddItem = () => {
        addTodo(value)
        setValue("");
    };
    return(
        <View>
            <TextInput styles={styles.input} placeholder="Legg til gjøre mål"
            onChangeText={(text)=>{setValue(text)}} value={value}>
            </TextInput>
            <TouchableOpacity onPress={handleAddItem}>
                <Text>Add item</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;
