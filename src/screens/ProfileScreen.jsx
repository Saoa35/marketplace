import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../styles/styles';
import {EditButton} from '../components/buttons/EditButton';
import {NameInput} from '../components/inputs/NameInput';
import {EmailInput} from '../components/inputs/EmailInput';
import {PhoneInput} from '../components/inputs/PhoneInput';
import {MainButton} from '../components/buttons/MainButton';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {patchUserAvatar, setUserAvatar} from '../redux/slices/userSlice';

function ProfileScreen() {
  const [userName, setUserName] = useState(fullName);
  const [userEmail, setEmail] = useState(email);
  const [phone, setPhone] = useState(phoneNumber);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userData, userAvatar, avatarId} = useSelector(state => state.user);
  const {token} = useSelector(state => state.user.userData);
  const {fullName, email, phoneNumber} = useSelector(
    state => state.user.userData.user,
  );

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

    const formdata = new FormData();

    formdata.append('file', {
      uri: result.assets[0].uri,
      type: result.assets[0].type,
      name: result.assets[0].fileName,
    });

    try {
      dispatch(setUserAvatar({formdata, token}));

      dispatch(patchUserAvatar({userName, phone, token, avatarId}));

      Snackbar.show({
        text: 'User settings updated successfully',
        backgroundColor: COLORS.green,
        duration: Snackbar.LENGTH_LONG,
        marginBottom: 100,
      });
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

  const addAvatar = () => {
    openGallery();
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        {userAvatar !== null ? (
          <Image source={{uri: userAvatar}} style={styles.avatarImage} />
        ) : userData.user.avatar ? (
          <Image
            source={{uri: userData.user.avatar}}
            style={styles.avatarImage}
          />
        ) : (
          <SimpleLineIcons name="user" style={styles.avatar} />
        )}
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
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 9999,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
});
