import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/pages/Header';


export default function App() {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#161818',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
