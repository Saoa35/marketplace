import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
import {SearchInput} from '../components/inputs/SearchInput';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {COLORS} from '../styles/styles';
// import { FlatList } from 'react-native-gesture-handler';

function HomeScreen({userData}) {
  const getGoods = async () => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products',
      );

      const data = response.data;
      return data;
    } catch (error) {
      Snackbar.show({
        text: error.message,
        backgroundColor: COLORS.red,
        duration: Snackbar.LENGTH_LONG,
        marginBottom: 100,
      });

      console.log(error);
    }
  };

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SearchInput />

      <View style={styles.listContainer}>
        {/* <FlatList /> */}

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
