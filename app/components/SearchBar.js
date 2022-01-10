import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({onChangeText}) => {
    return (
        <TextInput
            onChangeText={onChangeText}
            style={styles.searchBar}
            placeholder="Search Lolibrary"
        />
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        width: '90%'
    },
});

export default SearchBar;