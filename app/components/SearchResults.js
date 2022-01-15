import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchResult from "./SearchResult";
import fetchSearchData from "../utility/fetchSearchData";
import LoadingSpinner from "./LoadingSpinner";

const SearchResults = ({ data, searchTerm, total }) => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(data.data);
  const [loading, setLoading] = useState(false);

  // set mountedRef.current = true on mount so that
  // page state hook has no effect on mount.
  // we need to set a variable on mount because useEffect
  // automatically runs on mount.
  // see https://stackoverflow.com/a/64194949
  const mountedRef = useRef();

  useEffect(() => {
    // only run after mount
    if (mountedRef.current) {
      Promise.resolve(fetchSearchData(searchTerm, page)).then((data) => {
        setResults(results.concat(data.data));
        setLoading(false);
      });
    }
  }, [page]);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  function _renderItem({ item }) {
    return <SearchResult item={item} />;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={results}
        renderItem={_renderItem}
        // sometimes slugs are not unique, so we add the index to force uniqueness
        // unfortunately, lolibrary data does not have stable, unique ID
        keyExtractor={(item, index) => item.slug + index.toString()}
        onEndReached={() => {
          if (page < data.last_page) {
            setLoading(true);
            setPage(page + 1);
          }
        }}
      />
      {loading ? <LoadingSpinner searching={loading} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "90%",
    alignItems: "center",
  },
});

export default SearchResults;
