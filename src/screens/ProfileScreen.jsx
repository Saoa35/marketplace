import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../styles/styles';
import {EditButton} from '../components/buttons/EditButton';
import {NameInput} from '../components/inputs/NameInput';
import {EmailInput} from '../components/inputs/EmailInput';
import {PhoneInput} from '../components/inputs/PhoneInput';
import {MainButton} from '../components/buttons/MainButton';

function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <SimpleLineIcons name="user" style={styles.avatar} />
        <EditButton />
      </View>

      <NameInput />

      <EmailInput />

      <PhoneInput />

      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <MainButton name={'Sign Out'} btnColor={COLORS.blue} />
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
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: COLORS.gray,
    width: 220,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 220,
    position: 'relative',
  },
  avatar: {
    fontSize: 130,
    color: COLORS.buttonTextColor,
    backgroundColor: COLORS.gray,
  },
});
