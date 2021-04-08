import React, { useState } from 'react';
import { StyleSheet, Text, View, Header, TouchableOpacity, Linking } from 'react-native';
import Input from './input';
import Item from './item';


const Main = () => {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    };
    const handleRemove = (index) => {
        setTodos(item.filter((item, x) => {
            return index !== x;
        })
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> Uppered </Text>
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
                            <TouchableOpacity removeItem={handleRemove}/>
                               
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
        fontSize: 70,
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Telegraf-Regular',
        fontSize: 20,
    }

});

export default Main;