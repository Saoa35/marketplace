import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Loader} from '../components/Loader';

function ProductDetailsScreen({userData, productId}) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const navigation = useNavigation();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products/' + productId,
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
  }, [productId]);

  const sellerId = product.seller.id;
  const userId = userData.user.id;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.productContainer}>
      {product?.images ? (
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
      ) : (
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{with: '100%', height: 350, resizeMode: 'contain'}}
        />
      )}

      <View style={styles.textContant}>
        <View style={styles.contantTitle}>
          <Text style={styles.itemName}>{product?.title}</Text>
          <Text style={styles.itemPrice}>${product?.price}</Text>
        </View>
        <ScrollView>
          <Text style={styles.itemDescription}>{product?.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.profileWrapper}>
        <View style={styles.profileImageWrapper}>
          {product?.seller.avatar ? (
            <Image
              source={{uri: product?.seller.avatar}}
              style={{width: 70, height: 70, borderRadius: 9999}}
            />
          ) : (
            <Entypo name="user" style={styles.profileImage} />
          )}
        </View>
        <View>
          <Text style={styles.nameText}>{product?.seller.fullName}</Text>
          <Text style={styles.phoneText}>+38{product?.seller.phoneNumber}</Text>
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
        {userId === sellerId ? (
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
        ) : (
          ''
        )}
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
    width: '100%',
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
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
    height: '15%',
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
    height: '7%',
    alignItems: 'center',
    marginBottom: 15,
  },
});
