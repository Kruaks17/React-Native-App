import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" 
            width="54" height="54" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" 
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',

    },
    input:{
        color:'black',
        padding:5,
        height: 45,
        borderWidth: 3,
        borderRadius: 50,
        fontFamily:'Telegraf-Regular',  
        fontSize:20,
        textAlign: 'center',
        width: 250
    },
    placeholder:{
        justifyContent: 'center',
    },
    touch:{
        padding: 5,
        borderBottomColor: 'black',
        fontFamily:'Telegraf-Regular',  
        fontSize:20,
    }

})


export default Input;
