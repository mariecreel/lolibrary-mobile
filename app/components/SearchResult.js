import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SearchResult = ({item}) => {
    return (
        <View style={style.result}>
            <Image 
                source={{uri: item.image}}
            />
            <View>
                <Text>{item.english_name}</Text>
                <Text>{item.foreign_name ? item.foreign_name : ''}</Text>
                <Text>{item.brand ? item.brand.name : ''}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    result: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default SearchResult;