import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import SearchResult from './SearchResult';

const SearchResults = ({data}) => {
    const [page, setPage] = useState('1');
    useEffect(() => {console.log('data updated in search results')}, [data])

    const _renderItem = ({item}) => {
        return (
            <SearchResult item={item}/>
        )
    }

    return (
        <View>
            <FlatList 
                data={data}
                renderItem={_renderItem}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}

export default SearchResults;