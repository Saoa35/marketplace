import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ProductDetailsScreen({userData}) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const navigation = useNavigation();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products/2dc8fd4d-c81f-4bbc-9eee-4d52dc102c89',
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        },
      );

      if (response.status === 200) {
        setProduct(response.data);
      } else {
        Snackbar.show({
          text: 'Can`t find product information',
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
      }

      console.log(response.data);

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProduct();
  }, []);

  return (
    <View style={styles.productContainer}>
      {product.images && (
        <Swiper
          style={{width: '100%', height: '100%'}}
          loadMinimalLoader={
            <ActivityIndicator size="small" color={COLORS.green} />
          }
          showsButtons={true}
          showsPagination={false}>
          {product.images.map((item, id) => (
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
          onPressFunction={() => navigation.navigate('Home')}
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
