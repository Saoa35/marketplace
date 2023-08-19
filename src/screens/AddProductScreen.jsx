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
  const [isRequired, setIsRequired] = useState(false);
  const [productImages, setProductImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const addPhoto = image => {
    if (productImages.length < 5) {
      const newImage = {id: Date.now(), image};

      setProductImages([...productImages, newImage]);

      console.log(newImage);
    } else {
      Snackbar.show({
        text: 'You can only add up to 5 images',
        backgroundColor: COLORS.red,
        duration: Snackbar.LENGTH_LONG,
        marginBottom: 100,
      });
    }
  };

  const deletePhoto = id => {
    setProductImages(productImages.filter(image => image.id !== id));
  };

  const addNewProduct = async () => {
    try {
      if (!productName || !productPrice || !productDescription) {
        setIsRequired(true);

        Snackbar.show({
          text: 'Title, price and description are required',
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
      } else {
        const response = await axios.post(
          'https://rn.binary-travel-app.xyz/api/v1/products',
          {
            title: productName,
            description: productDescription,
            price: productPrice,
            images: [],
          },
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          },
        );

        setIsLoading(true);

        if (response.status === 201) {
          setIsLoading(false);

          setProductName('');
          setProductPrice('');
          setProductDescription('');

          navigation.navigate('Home');

          Snackbar.show({
            text: `Product ${productName} was successfuly added`,
            backgroundColor: COLORS.red,
            duration: Snackbar.LENGTH_LONG,
            marginBottom: 100,
          });
        } else {
          Snackbar.show({
            text: 'Something went wrong :(',
            backgroundColor: COLORS.red,
            duration: Snackbar.LENGTH_LONG,
            marginBottom: 100,
          });
        }

        console.log(response);

        setIsLoading(false);
      }
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

  console.log(productImages.length);

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
        {isRequired && (
          <Text style={styles.requiredText}>Title is required</Text>
        )}
      </View>

      <View style={styles.titleInputWrapper}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          value={productPrice}
          onChangeText={e => setProductPrice(e)}
          placeholder="Price"
          style={styles.input}
        />
        {isRequired && (
          <Text style={styles.requiredText}>Price is required</Text>
        )}
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
          onPressFunction={() =>
            addPhoto(
              'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011128841.png@webp',
              // 'data:image/jpeg;base64,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',
              // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0zoWRNdrS-adws2WhQwAGCSl5ReDMOJ0Sg&usqp=CAU',
            )
          }
        />
      </View>

      <View style={styles.imagesContainer}>
        {productImages.map(el => (
          <AddedImage
            key={el.id}
            picture={el.image}
            id={el.id}
            deletePhoto={deletePhoto}
          />
        ))}
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
    color: COLORS.red,
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
