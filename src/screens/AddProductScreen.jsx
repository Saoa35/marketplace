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
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {setProductImage} from '../redux/slices/productsSlice';

function AddProductScreen() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [imagesList, setImagesList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user.userData);
  const {token} = useSelector(state => state.user.userData);
  const {productImage} = useSelector(state => state.products);

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);

    const formdata = new FormData();

    formdata.append('file', {
      uri: result.assets[0].uri,
      type: result.assets[0].type,
      name: result.assets[0].fileName,
    });

    try {
      dispatch(setProductImage({formdata, token}));

      addPhoto(productImage.url, productImage.id);

      if (productImages.length < 5) {
        setImagesList([...imagesList, productImage.id]);
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

  const addPhoto = (image, id) => {
    if (productImages.length < 5) {
      const newImage = {id, image};

      setProductImages([...productImages, newImage]);
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
    setImagesList(imagesList.filter(image => image !== id));
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
            images: imagesList,
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
          setIsRequired(false);
          setProductImages([]);

          navigation.navigate('Home');

          Snackbar.show({
            text: `Product ${productName} was successfuly added`,
            backgroundColor: COLORS.green,
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
          onPressFunction={openGallery}
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
