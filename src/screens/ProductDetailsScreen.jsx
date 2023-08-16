import React from 'react';
import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import Swiper from 'react-native-swiper';

function ProductDetailsScreen({title, description, price, images}) {
  images = [
    'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011128841.png@webp',
    'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011327805.png@webp',
    'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011957124.png@webp',
    'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160014501920.png@webp',
    'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011718399.png@webp',
  ];

  return (
    <View style={styles.productContainer}>
      {images && (
        <Swiper
          loadMinimalLoader={
            <ActivityIndicator size="small" color={COLORS.green} />
          }
          showsButtons={true}
          showsPagination={false}>
          {images.map((item, id) => (
            <Image
              key={id}
              source={{
                uri: item,
              }}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          ))}
        </Swiper>
      )}

      <View style={styles.textContant}>
        <View style={styles.contantTitle}>
          <Text style={styles.itemName}>Apple iPhone 14 Pro</Text>
          <Text style={styles.itemPrice}>$1420</Text>
        </View>
        <Text style={styles.itemDescription}>
          Fingerprint-resistant oleophobic coating, Support for display of
          multiple languages and characters simultaneously, Wide color display
          (P3), True Tone display, HDR, Super Retina XDR Display, Always On
          Display, ProMotion technology with adaptive refresh rates up to 120Hz,
          Dynamic Island, 1600 nits peak brightness (HDR), 2000 nits peak
          brightness (outdoor).
        </Text>
      </View>

      <View style={styles.profileWrapper}>
        <View style={styles.profileImageWrapper}>
          <Entypo name="user" style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.phoneText}>+38 068 435 5826</Text>
        </View>
      </View>

      <View style={styles.callButtonWrapper}>
        <MainButton
          name={'Call Seller'}
          btnColor={COLORS.green}
          icon={
            <MaterialCommunityIcons
              name="phone"
              style={{
                fontSize: 30,
                marginRight: 10,
                color: COLORS.buttonTextColor,
              }}
            />
          }
        />
      </View>

      <View style={styles.deleteButtonWrapper}>
        <MainButton
          name={'Delete Product'}
          btnColor={COLORS.red}
          icon={
            <Entypo
              name="cross"
              style={{fontSize: 30, color: COLORS.buttonTextColor}}
            />
          }
          screen={'Home'}
        />
      </View>
    </View>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  textContant: {
    flex: 1,
    padding: 20,
  },
  contantTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.title,
  },
  itemPrice: {
    fontSize: 18,
    color: COLORS.green,
    fontWeight: '700',
    fontWeight: '700',
  },
  itemDescription: {
    color: COLORS.title,
    fontSize: 16,
  },
  profileWrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  },
  profileImageWrapper: {
    marginHorizontal: 20,
    width: 70,
    height: 70,
    borderRadius: 9999,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    fontSize: 40,
    backgroundColor: COLORS.green,
    color: COLORS.buttonTextColor,
    borderRadius: 9999,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: COLORS.title,
  },
  phoneText: {
    fontSize: 16,
    fontWeight: '500',
  },
  callButtonWrapper: {
    width: '100%',
    marginLeft: 40,
    marginBottom: 40,
  },
  deleteButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
});
