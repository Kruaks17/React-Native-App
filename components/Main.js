import React, { useState } from 'react';
import { StyleSheet, View,  } from 'react-native';

import Input from './input';
import Item from './item';
import List from '../style-components/list/index';
import Header from '../style-components/header/index';
import HeaderText from '../style-components/Pagetitle';


const Main = () => {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    };
    const handleRemove = (index) => {
        setItems(items.filter((items, x) => {
            return index !== x;
        })
        );
    };
    return (
        <View style={styles.container}>
            <Header>
                <HeaderText> Uppered </HeaderText>
            </Header>
            <Input key={items.id} addItem={addItem} />
            <List>
                
                {items.map((item, index) => {
                    return (
                        <>
                            <Item
                                item={item}
                                index={index}
                                removeItem={handleRemove}/>
                        </>
                    )
                })}
            </List>
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
});

export default Main;