import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../styles/styles';
import {EditButton} from '../components/buttons/EditButton';
import {NameInput} from '../components/inputs/NameInput';
import {EmailInput} from '../components/inputs/EmailInput';
import {PhoneInput} from '../components/inputs/PhoneInput';
import {MainButton} from '../components/buttons/MainButton';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

function ProfileScreen({userData}) {
  const [userName, setUserName] = useState(fullName);
  const [userEmail, setEmail] = useState(email);
  const [phone, setPhone] = useState(phoneNumber);

  const navigation = useNavigation();

  const {fullName, email, phoneNumber} = userData.user;

  useEffect(() => {
    setUserName(fullName);
    setEmail(email);
    setPhone(phoneNumber);
  }, [fullName, email, phoneNumber]);

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

    console.log(result);

    // const formdata = new FormData();

    // formdata.append('file', {
    //   uri: result.assets[0].uri,
    //   type: result.assets[0].type,
    //   name: result.assets[0].fileName,
    // });

    // try {
    //   const response = await axios.post(
    //     'https://rn.binary-travel-app.xyz/api/v1/images',
    //     formdata,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${userData.token}`,
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     },
    //   );

    //   addPhoto(response.data.url, response.data.id);

    //   if (productImages.length < 5) {
    //     setImagesList([...imagesList, response.data.id]);
    //   }
    // } catch (error) {
    //   Snackbar.show({
    //     text: error.message,
    //     backgroundColor: COLORS.red,
    //     duration: Snackbar.LENGTH_LONG,
    //     marginBottom: 100,
    //   });

    //   console.log(error);
    // }
  };

  const addAvatar = () => {
    openGallery();
  };

  // console.log(userData);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <SimpleLineIcons name="user" style={styles.avatar} />
        <EditButton onPressFunction={addAvatar} />
      </View>

      <NameInput userName={userName} setUserName={setUserName} />

      <EmailInput userEmail={userEmail} setEmail={setEmail} />

      <PhoneInput phone={phone} setPhone={setPhone} />

      <View style={styles.buttonWrapper}>
        <MainButton
          name={'Sign Out'}
          onPressFunction={() => navigation.navigate('SignIn')}
          btnColor={COLORS.blue}
        />
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageWrapper: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: COLORS.gray,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    position: 'relative',
  },
  avatar: {
    fontSize: 130,
    color: COLORS.buttonTextColor,
    backgroundColor: COLORS.gray,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
});
