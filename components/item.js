import React from 'react';
import { TouchableOpacity } from 'react-native';
import Container from '../style-components/container/index';
import Title from '../style-components/title/index';
import { Feather } from '@expo/vector-icons';

const Item = (props) => {
    const{ item, index, removeItem } = props;

    return(
        <Container>
            <Title
            >{item}</Title>
            <TouchableOpacity onPress={() => {
                removeItem(index)
            }}>
                <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
        </Container>
    )
}

export default Item;