import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import {AddedImage} from '../components/AddedImage';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import {Loader} from '../components/Loader';

function AddProductScreen({userData}) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const addNewProduct = async () => {
    try {
      const response = await axios.post(
        'https://rn.binary-travel-app.xyz/api/v1/products',
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
          body: {
            title: productName,
            description: productDescription,
            price: productPrice,
            images: [],
          },
        },
      );

      setIsLoading(true);

      if (response.status === 200) {
        setIsLoading(false);

        navigation.navigate('Home');

        Snackbar.show({
          text: `Product ${productName} was successfuly added`,
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.addContainer}>
      <View style={styles.titleInputWrapper}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={productName}
          onChangeText={e => setProductName(e)}
          placeholder="Title"
          style={styles.input}
        />
        <Text style={styles.requiredText}>Title is required</Text>
      </View>

      <View style={styles.titleInputWrapper}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          value={productPrice}
          onChangeText={e => setProductPrice(e)}
          placeholder="Price"
          style={styles.input}
        />
        <Text style={styles.requiredText}>Price is required</Text>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={productDescription}
          onChangeText={e => setProductDescription(e)}
          multiline
          numberOfLines={6}
          placeholder="Type here"
          style={styles.descriptionInput}
        />
      </View>

      <View style={styles.buttonsWrapper}>
        <MainButton
          name={'Add Product'}
          btnColor={COLORS.green}
          icon={
            <Entypo
              name="plus"
              style={{fontSize: 30, color: COLORS.buttonTextColor}}
            />
          }
          onPressFunction={addNewProduct}
        />
        <Text style={{width: 20}}></Text>
        <MainButton
          name={'Attach Image'}
          btnColor={COLORS.blue}
          icon={
            <MaterialCommunityIcons
              name="image"
              style={{fontSize: 30, color: COLORS.buttonTextColor}}
            />
          }
        />
      </View>

      <View style={styles.imagesContainer}>
        <AddedImage />
        <AddedImage />
        <AddedImage />
        <AddedImage />
        <AddedImage />
      </View>
    </View>
  );
}

export default AddProductScreen;

const styles = StyleSheet.create({
  addContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleInputWrapper: {
    width: '90%',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: COLORS.title,
  },
  input: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.title,
    letterSpacing: 1,
  },
  requiredText: {
    marginTop: 5,
  },
  descriptionWrapper: {
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
  },
  descriptionInput: {
    fontSize: 16,
    marginTop: 10,
    padding: 8,
    textAlignVertical: 'top',
    letterSpacing: 1,
    textAlign: 'justify',
    opacity: 0.6,
    color: COLORS.title,
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
  },
  buttonsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  imagesContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
