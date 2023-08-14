import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../styles/styles';
import {Input} from '../components/Input';

function SignInScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign In</Text>

      <Input labelName={'Email'} placeholderName={'Enter your email'} />
      <Input labelName={'Password'} placeholderName={'Enter your password'} />
    </View>
  );
}

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
    fontSize: 32,
    fontWeight: '700',
  },
});

export default SignInScreen;
