import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SearchResult = ({item}) => {
    return (
        <View style={style.result}>
            <Image 
                source={{uri: item.image}}
                style={style.image}
            />
            <View>
                <Text>{item.english_name}</Text>
                <Text>{item.foreign_name ? item.foreign_name : ''}</Text>
                <Text>{item.categories ? item.categories[0].name : ''}</Text>
                <Text>{item.brand ? item.brand.name : ''}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    result: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 10,

    },
    image: {
        flex: 1,
        width: 300,
        height: 300
    }
});

export default SearchResult;