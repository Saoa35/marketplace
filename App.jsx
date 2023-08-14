import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

function App() {
  return (
    // <View style={styles.container}>
    <View>
      <SignInScreen />
      <StatusBar theme="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
});

export default App;
