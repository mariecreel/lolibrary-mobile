import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const baseSearchUrl = "https://lolibrary.org/api/search?=";
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);

  // search automatically when text in input changes
  // wait three seconds until user has stopped typing
  useEffect(() => {
    if (searchTerm) {
      setTimeout(() => {
        fetch(`${baseSearchUrl}${searchTerm}`, { method: 'POST' })
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setTotal(data.total);
          })
          .catch((e) => console.error(e));
      }, 3000);
    }
  }, [searchTerm]);

  return (
    <View>
      <SearchBar onChangeText={setSearchTerm} text={searchTerm} />
      <Text>
        {searchTerm
          ? `Search results for ${searchTerm} (${total} total results):`
          : "Search results will appear below."}
      </Text>
      <Text>{data ? data.toString() : ''}</Text>
    </View>
  );
};

export default Search;
