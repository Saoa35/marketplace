import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../styles/styles';
import {GreenButton} from '../components/buttons/GreenButton';

function SignInScreen({navigation}) {
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
        <GreenButton name={'Sign In'} />

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
