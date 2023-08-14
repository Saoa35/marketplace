import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';

function SignInScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.iputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <MainButton />
      </View>
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
  iputContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    width: '90%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    letterSpacing: 1,
  },
  bottomContainer: {
    alignItems: 'center',
  },
});

export default SignInScreen;
