import React, { useState } from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, } from 'react-native';
import Input from './input';
import Item from './item';
import Dropdown from './dropdown';

const Main = () => {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    };
    const handleRemove = (index) => {
        setItems(item.filter((item, x) => {
            return index !== x;
        })
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.headerText}> Uppered </Text>
                <div>
                    <Dropdown />
                </div>
            </View>
            <View style={styles.list}>
                <Input addItem={addItem} />
                {items.map((item, index) => {
                    return (
                        <>

                            <Item
                                item={item}
                                index={index}
                            />
                            <TouchableOpacity removeItem={handleRemove} />
                        </>
                    )

                })}

            </View>

            <View style={styles.footer}>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E3D0CA',
    },
    header: {
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        marginTop: 20,
    },
    headerText: {
        fontFamily: 'RadioGrotesk-Regular',
        fontSize: 40,
        justifyContent: 'flex-end', 
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Telegraf-Regular',
        fontSize: 20,
    }

});

export default Main;