import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

const Search = () => {
    const baseSearchUrl = '';
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState([]);
    return ( 
        <View>
            <SearchBar onChangeText={setSearchText}/>
            <Text>{searchText ? `Search results for ${searchText}:` : "Search results will appear below."}</Text>
        </View>
    );
}

export default Search;