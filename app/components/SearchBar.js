import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.searchBarWrapper}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Search Lolibrary"
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
  },
  searchBarWrapper: {
    height: 40,
    borderWidth: 2,
    borderRadius: 7,
    padding: 7,
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default SearchBar;
