import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../styles/styles';
import {EditButton} from '../components/buttons/EditButton';

function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <SimpleLineIcons name="user" style={styles.avatar} />
        <EditButton />
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
