import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        Hello React Native
      </Text>
      <Text style={styles.darkText}>Hello white</Text>
    </View>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
});
