import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import {COLORS} from '../styles/styles';
import {ProductItem} from '../components/ProductItem';
import {PlusButton} from '../components/buttons/PlusButton';
// import { FlatList } from 'react-native-gesture-handler';

function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchWrapper}>
        <EvilIcons name="search" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

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
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 35,
    backgroundColor: COLORS.buttonTextColor,
    borderRadius: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    borderTopWidth: 2,
    borderTopColor: COLORS.gray,
    borderRightWidth: 2,
    borderRightColor: COLORS.gray,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.gray,
    width: '85%',
  },
  searchIcon: {
    fontSize: 25,
    marginLeft: 8,
    marginBottom: 3,
    opacity: 0.6,
  },
  searchInput: {
    fontSize: 16,
    paddingBottom: 5,
    paddingTop: 5,
    letterSpacing: 1,
    width: '70%',
    opacity: 0.6,
    color: COLORS.title,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
