import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
import {SearchInput} from '../components/SearchInput';
// import { FlatList } from 'react-native-gesture-handler';

function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SearchInput />

      <View style={styles.listContainer}>
        {/* <FlatList /> */}

        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </View>

      <PlusButton />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
  },

  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
