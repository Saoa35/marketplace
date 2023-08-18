import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
import {SearchInput} from '../components/inputs/SearchInput';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {COLORS} from '../styles/styles';
import {Loader} from '../components/Loader';
import {EmptyList} from '../components/EmptyList';

function HomeScreen({userData}) {
  const [goodsList, setGoodsList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        setfilteredList(response.data);
      } else {
        Snackbar.show({
          text: 'Something went wrong :(',
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
      }

      setIsLoading(false);
    } catch (error) {
      Snackbar.show({
        text: error.message,
        backgroundColor: COLORS.red,
        duration: Snackbar.LENGTH_LONG,
        marginBottom: 100,
      });

      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getGoods();
  }, []);

  const searchFilter = text => {
    if (text) {
      const newData = goodsList.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredList(newData);
      setSearchValue(text);
    } else {
      setfilteredList(goodsList);
      setSearchValue(text);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SearchInput searchValue={searchValue} searchFilter={searchFilter} />

      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredList}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => getGoods}
              />
            }
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList />}
            contentContainerStyle={{
              width: 350,
              alignItems: 'center',
            }}
            renderItem={({item}) => (
              <ProductItem
                userData={userData}
                title={item.title}
                description={item.description}
                price={item.price}
                preview={item.preview}
              />
            )}
          />
        </View>
      )}

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
