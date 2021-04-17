import React from 'react';
import { TouchableOpacity } from 'react-native';
import Container from '../style-components/container/index';
import Title from '../style-components/title/index';

const Item = (props) => {
    const{ item, index, removeItem } = props;

    return(
        <Container>
            <Title
            >{item}</Title>
            <TouchableOpacity onPress={() => {
                removeItem(index)
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="none"
                    stroke="#000"
                    viewBox="0 0 24 24"
                >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 7L20 7"></path>
                    <path d="M10 11L10 17"></path>
                    <path d="M14 11L14 17"></path>
                    <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"></path>
                </svg>
            </TouchableOpacity>
        </Container>
    )
}

export default Item;