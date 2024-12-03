import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ScoreCard from '../components/ScoreCard';

export default function ScoreScreen() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0); // Waktu pertandingan dalam detik
  const [isMatchActive, setIsMatchActive] = useState(true); // Status pertandingan

  // Fungsi untuk memformat waktu (detik -> menit:detik)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Lifecycle untuk menjalankan timer dari 0 ke 90 menit
  useEffect(() => {
    if (timeElapsed < 90 * 60 && isMatchActive) {
      const timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup saat komponen di-*unmount*
    } else if (timeElapsed >= 90 * 60) {
      setIsMatchActive(false); // Pertandingan selesai jika mencapai 90 menit
    }
  }, [timeElapsed, isMatchActive]);

  const resetMatch = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setTimeElapsed(0); // Reset waktu ke 0 detik
    setIsMatchActive(true); // Aktifkan kembali pertandingan
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Soccer Match ⚽</Text>
      <Text style={styles.timer}>
        waktu pertandingan: {formatTime(timeElapsed)} {isMatchActive ? '' : '(Full Time)'}
      </Text>

      <View style={styles.scoreContainer}>
        <ScoreCard
          teamName="Team A"
          score={teamAScore}
          onScore={() => isMatchActive && setTeamAScore(teamAScore + 1)}
        />
        <Text style={styles.vs}>VS</Text>
        <ScoreCard
          teamName="Team B"
          score={teamBScore}
          onScore={() => isMatchActive && setTeamBScore(teamBScore + 1)}
        />
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetMatch}>
        <Text style={styles.resetText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e3d59',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f0e1',
    marginBottom: 10,
  },
  timer: {
    fontSize: 18,
    color: '#f5f0e1',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  vs: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f0e1',
    marginHorizontal: 10,
  },
  resetButton: {
    backgroundColor: '#ff6e40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetText: {
    color: '#f5f0e1',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
