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

function SignUpScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.iputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput placeholder="Enter your name" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
            keyboardType="phone-pad"
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
        <GreenButton name={'Sign Up'} />

        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;

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
