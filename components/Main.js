import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from './input';
import Item from './item';
import List from '../style-components/list/index';
import Header from '../style-components/header/index';
import HeaderText from '../style-components/Pagetitle';
import Title from '../style-components/title';

const Main = () => {

    const [items, setItems] = useState([]);
    const [itemList, setItemList] =useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    };
    const handleRemove = (index) => {
        setItems(items.filter((items, x) => {
            return index !== x;
        })
        );
    };
    const STORAGE_KEY = "items";

    useEffect(()=>{
        const getData = async () =>{
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if(jsonValue != null){
                    const parsedJson = JSON.parse(jsonValue);              }
                    setItemList(parsedJson);
            } catch (error) {
                console.log(error, "Fuck dette var feil");
            }
        };
        getData();
    },[]);

    useEffect(()=>{
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
                
            } catch (error) {
                console.log(error);
            }
        }
        storeData(itemList);
    }, [itemList]);
    return (
        <View style={styles.container}>
            <Header>
                <HeaderText> Uppered </HeaderText>
            </Header>
            <List>
                <Input addItem={addItem} />
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
                <Title>
                    
                </Title>
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