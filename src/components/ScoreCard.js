import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ScoreCard({ teamName, score, onScore }) {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <TouchableOpacity style={styles.button} onPress={onScore}>
        <Text style={styles.buttonText}>+ Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f0e1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3d59',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff6e40',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ff6e40',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#f5f0e1',
    fontWeight: 'bold',
  },
});
