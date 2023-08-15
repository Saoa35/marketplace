import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../styles/styles';

export const ProductItem = ({title, description, price, preview}) => {
  const truncateText = str => {
    if (str.length >= 50) {
      return str.substring(0, 115) + '...';
    }
    return str;
  };

  return (
    <TouchableOpacity style={{width: '85%', marginBottom: 10}}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://i.ebayimg.com/images/g/rW4AAOSwnwdjGWGF/s-l1600.jpg',
          }}
          style={styles.imageStyle}
        />
        <View style={styles.contantContainer}>
          <View style={styles.contantTitle}>
            <Text style={styles.itemName}>Apple iPhone 14 Pro</Text>
            <Text style={styles.itemPrice}>$1420</Text>
          </View>
          <Text style={styles.itemDescription}>
            {truncateText(
              'Fingerprint-resistant oleophobic coating, Support for display of multiple languages and characters simultaneously, Wide color display (P3), True Tone display, HDR, Super Retina XDR Display, Always On Display, ProMotion technology with adaptive refresh rates up to 120Hz, Dynamic Island, 1600 nits peak brightness (HDR), 2000 nits peak brightness (outdoor).',
            )}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLORS.buttonTextColor,
    elevation: 5,
  },
  imageStyle: {
    width: '35%',
    height: '100%',
    resizeMode: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contantContainer: {
    flex: 1,
    padding: 12,
  },
  contantTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.title,
  },
  itemPrice: {
    fontSize: 15,
    color: COLORS.green,
    fontWeight: '700',
    fontWeight: '700',
  },
  itemDescription: {
    color: COLORS.title,
  },
});
