import React, { useState } from 'react';
import { StyleSheet, Text, CheckBox, TouchableOpacity, View } from 'react-native';

const Item = (props) => {

    const { item, index, removeItem } = props;
    const [isSelected, setSelection] = useState(false);
    
    return (

        <View style={styles.container}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.item} 
            >{item}</Text>
            <TouchableOpacity onPress={() => {
                removeItem(index)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox:{
        borderRadius:50,
        color: 'blue',
    },
    item: {
        marginRight: 50,
        fontSize: 20,
        fontFamily: 'Telegraf-Regular',
        alignItems: 'center',
        justifyContent: 'center',

    }

});
export default Item;