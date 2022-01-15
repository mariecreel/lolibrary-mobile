import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import LoadingSpinner from "../components/LoadingSpinner";
import fetchSearchData from "../utility/fetchSearchData";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  // search automatically when text in input changes
  // wait three seconds until user has stopped typing
  useEffect(() => {
    if (searchTerm) {
      // set searching to true to trigger loading spinner
      if (!searching) {
        setSearching(true);
      }
      const _fetchSearchData = setTimeout(() => {
        Promise.resolve(fetchSearchData(searchTerm))
          .then((data) => {
            setData(data);
            setTotal(data.total);
            setSearching(false);
          })
          .catch((e) => console.error(e));
      }, 500);
      // need to clear timeout to prevent fetching data prematurely
      // before user has completed typing
      // see https://stackoverflow.com/a/61629055
      return () => clearTimeout(_fetchSearchData);
    } else {
      // clear search results when search bar is empty
      setData([]);
      setTotal(0);
      setSearching(false);
      return;
    }
  }, [searchTerm]);

  return (
    <View>
      <SearchBar onChangeText={setSearchTerm} text={searchTerm} />
      <Text>
        {searchTerm
          ? searching
            ? `Searching for ${searchTerm}...`
            : `Search results for ${searchTerm} (${total} total results):`
          : "Search results will appear below."}
      </Text>
      <View style={style.resultsWrapper}>
        {searching ? (
          <LoadingSpinner searching={searching} marginTop={"30%"} />
        ) : data ? (
          <SearchResults data={data} searchTerm={searchTerm} total={total} />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  resultsWrapper: {
    alignItems: "center",
  },
});

export default Search;
