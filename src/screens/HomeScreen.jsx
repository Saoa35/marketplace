import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
import {SearchInput} from '../components/inputs/SearchInput';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {COLORS} from '../styles/styles';
// import { FlatList } from 'react-native-gesture-handler';

function HomeScreen({userData}) {
  const [goodsList, setGoodsList] = useState(null);

  const getGoods = async () => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products',
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        },
      );

      if (response.status === 200) {
        setGoodsList(response.data);
      } else {
        Snackbar.show({
          text: 'Something went wrong :(',
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
      }
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
        <FlatList
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center',
          }}
          data={goodsList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ProductItem
              title={item.title}
              description={item.description}
              price={item.price}
              preview={item.preview}
            />
          )}
        />
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
