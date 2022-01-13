import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import SearchResult from './SearchResult';

const SearchResults = ({data}) => {
    const [page, setPage] = useState('1');

    const _renderItem = ({item}) => {
        return (
            <SearchResult item={item}/>
        )
    }

    return (
        <View style={{height: '90%'}}>
            <FlatList 
                data={data}
                renderItem={_renderItem}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}

export default SearchResults;