import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Input = (props) => {

    const [value, setValue] = useState("");
    const { addItem } = props;

    const handleAddItem = () => {
        addItem(value)
        setValue("");
    };

    return (
        <View style={styles.container}> 
            <TextInput style={styles.input} placeholder="Legg til gjøre mål"
                onChangeText={(text) => { setValue(text) }} value={value}>
            </TextInput>
            <TouchableOpacity style={styles.touch} onPress={handleAddItem}>
                <Text>Legg til i listen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        flex: 2,
        flexDirection: 'collumn',
        justifyContent:'flex-start',
        alignItems:'center',

    },
    input:{
        color:'black',
        padding: 20,
        borderBottomColor: 'black',
        fontFamily:'Telegraf-Regular',  
        fontSize:20,
    },
    placeholder:{
        justifyContent: 'center',
    },
    touch:{
        
        padding: 20,
        borderBottomColor: 'black',
        fontFamily:'Telegraf-Regular',  
        fontSize:20,
    }

})


export default Input;
