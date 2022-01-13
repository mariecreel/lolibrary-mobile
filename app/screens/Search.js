import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const Search = () => {
  const baseSearchUrl = "https://lolibrary.org/api/search";
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false)
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
        const fetchSearchData = setTimeout(() => {
                fetch(`${baseSearchUrl}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    brands: [],
                    categories: [],
                    colors: [],
                    features: [],
                    page: 1,
                    tags: [],
                    years: [],
                    search: searchTerm 
                    }),
                })
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setTotal(data.total);
                    setSearching(false)
                })
                .catch((e) => console.error(e));
        }, 3000);
        // need to clear timeout to prevent fetching data prematurely
        // before user has completed typing
        // see https://stackoverflow.com/a/61629055
        return () => clearTimeout(fetchSearchData);
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
          ? (searching ? `Searching for ${searchTerm}...` : `Search results for ${searchTerm} (${total} total results):`)
          : "Search results will appear below."}
      </Text>
      {data ? <SearchResults data={data.data} /> : <></>}
    </View>
  );
};

export default Search;
