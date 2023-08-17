import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../styles/styles';
import {EditButton} from '../components/buttons/EditButton';
import {NameInput} from '../components/inputs/NameInput';
import {EmailInput} from '../components/inputs/EmailInput';
import {PhoneInput} from '../components/inputs/PhoneInput';
import {MainButton} from '../components/buttons/MainButton';
// import {useNavigation} from '@react-navigation/native';

function ProfileScreen({userData}) {
  // const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const {fullName, email} = userData.user;

  console.log(userData);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <SimpleLineIcons name="user" style={styles.avatar} />
        <EditButton />
      </View>

      <NameInput userName={userName} setUserName={setUserName} />

      <EmailInput userEmail={userEmail} setEmail={setEmail} />

      <PhoneInput phone={phone} setPhone={setPhone} />

      <View style={styles.buttonWrapper}>
        <MainButton
          name={'Sign Out'}
          screen={'SignIn'}
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
