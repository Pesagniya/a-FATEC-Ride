import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import RideBubble from '@/components/RideBubble';
import Back from '@/components/Back';
import { mockRides, Ride } from '../data/ridesData';

export default function ListRides() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { start, dateSearch } = params;

  const isSameDay = dateSearch === `${new Date().getMonth() + 1}/${new Date().getDate()}`;

  const handleSelectRide = (ride: Ride) => {
    router.push({
      pathname: '/rideDetails',
      params: { ...ride },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.redRectangle}>
        <Back color="white" />
        <View style={styles.textContainer}>
          <Text style={[styles.whiteText, styles.topText]}>Partindo de: {start}</Text>
          <Text style={[styles.whiteText, styles.bottomText]}>{isSameDay ? 'Hoje!' : dateSearch}</Text>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.verticalLine} />
          <Ionicons name="menu" size={24} color="white" />
        </View>
      </View>

      <FlatList
        data={mockRides}
        renderItem={({ item }) => <RideBubble ride={item} onPress={handleSelectRide} />}
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
  redRectangle: {
    backgroundColor: '#fc5a53',
    borderRadius: 15,
    height: 80,
    marginBottom: 20,
    position: 'relative',
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    marginLeft: -110,
  },
  textContainer: {
    justifyContent: 'center',
  },
  topText: {
    marginBottom: 4,
  },
  bottomText: {
    marginTop: 4,
  },
  rightContainer: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    width: 1,
    height: '200%',
    backgroundColor: 'white',
    marginRight: 15,
  },
});
