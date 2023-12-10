import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <LinearGradient
      colors={['#000000', '#2c3e50']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.root}>
        <SignInScreen />
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
});
