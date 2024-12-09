import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

import RideBubble from '@/components/RideBubble';
import { mockRides, Ride } from '../data/ridesData';

export default function ListRides() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { updatedScore, rideId } = params;  

  const [rides, setRides] = useState(mockRides);

  useEffect(() => {
    if (updatedScore !== undefined) {
      setRides((prevRides) =>
        prevRides.map((ride) =>
          ride.id === rideId
            ? { ...ride, score: updatedScore.toString() } 
            : ride
        )
      );
    }
  }, [updatedScore, rideId]);  

  const calculateAverageScore = () => {
    const totalScore = rides.reduce((acc, ride) => acc + parseFloat(ride.score), 0);
    return (totalScore / rides.length).toFixed(2);
  };

  const handleSelectRide = (ride: Ride) => {
    router.push({
      pathname: '/rideDetails',
      params: { ...ride },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Histórico de Viagens</Text>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {rides.length}</Text>
        <Text style={styles.totalText}>Média de Avaliações: {calculateAverageScore()}</Text>
      </View>

      <FlatList
        data={rides}
        renderItem={({ item }) => <RideBubble ride={item} onPress={handleSelectRide} showRatingButton={true} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  list: {
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginRight: 20,
  },
});
