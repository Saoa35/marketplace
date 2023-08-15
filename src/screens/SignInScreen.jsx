import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import {EmailInput} from '../components/inputs/EmailInput';
import {PasswordInput} from '../components/inputs/PasswordInput';

function SignInScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.iputContainer}>
        <EmailInput />

        <PasswordInput />
      </View>

      <View style={styles.bottomContainer}>
        <MainButton
          name={'Sign In'}
          screen={'TabNavigation'}
          btnColor={COLORS.green}
        />

        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Don`t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: COLORS.title,
    marginTop: 50,
    marginBottom: 70,
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '700',
  },
  iputContainer: {
    alignItems: 'center',
  },

  bottomContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  bottomTextWrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: 20,
  },

  linkText: {
    fontSize: 20,
    color: COLORS.green,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
});
