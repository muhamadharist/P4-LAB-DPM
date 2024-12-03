import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreScreen from './src/screens/ScoreScreen';  

export default function App() {
  return (
    <View style={styles.container}>
      <ScoreScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3d59',
  },
});
