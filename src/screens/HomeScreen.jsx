import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
import {Loader} from '../components/Loader';
import {EmptyList} from '../components/EmptyList';
import {useDispatch, useSelector} from 'react-redux';
import {SearchInput} from '../components/inputs/SearchInput';
import {getGoodsList} from '../redux/slices/productsSlice';

function HomeScreen({setProductId}) {
  const [filteredList, setfilteredList] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const {token} = useSelector(state => state.user.userData);
  const {goodsList} = useSelector(state => state.products);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getGoodsList({token})).then(() => {
      setfilteredList(goodsList);
      setIsLoading(false);
    });
  }, []);

  const searchFilter = text => {
    const newData = goodsList.filter(item => {
      const itemData = item.title ? item.title.toUpperCase() : '';
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setfilteredList(newData);
    setSearchValue(text);
  };

  return (
    <View style={styles.mainContainer}>
      <SearchInput searchValue={searchValue} searchFilter={searchFilter} />

      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredList.length ? filteredList : goodsList}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => setfilteredList(goodsList)}
              />
            }
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList />}
            contentContainerStyle={{
              width: 350,
              alignItems: 'center',
            }}
            renderItem={({item}) => (
              <ProductItem setProductId={setProductId} item={item} />
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
