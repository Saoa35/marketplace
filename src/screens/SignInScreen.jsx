import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import {EmailInput} from '../components/inputs/EmailInput';
import {PasswordInput} from '../components/inputs/PasswordInput';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setuserData] = useState('');

  const handleSubmit = async () => {
    try {
      if (!email && !password) {
        Snackbar.show({
          text: 'Email and Password fields are required',
          backgroundColor: COLORS.red,
          duration: Snackbar.LENGTH_LONG,
          marginBottom: 100,
        });
      } else {
        const response = await axios.post(
          'https://rn.binary-travel-app.xyz/api/v1/auth/sign-in',
          {
            email: email,
            password: password,
          },
        );

        if (response.status === 200) {
          setuserData(response.data);

          navigation.navigate('TabNavigation', {userData});
        } else {
          Snackbar.show({
            text: 'Something went wrong :(',
            backgroundColor: COLORS.red,
            duration: Snackbar.LENGTH_LONG,
            marginBottom: 100,
          });
        }

        console.log(response.data);
      }
    } catch (error) {
      Snackbar.show({
        text: error.message,
        backgroundColor: COLORS.red,
        duration: Snackbar.LENGTH_LONG,
        marginBottom: 100,
      });

      console.log(error.message);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.iputContainer}>
        <EmailInput email={email} setEmail={setEmail} />

        <PasswordInput password={password} setPassword={setPassword} />
      </View>

      <View style={styles.bottomContainer}>
        <MainButton
          name={'Sign In'}
          onPressFunction={handleSubmit}
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
