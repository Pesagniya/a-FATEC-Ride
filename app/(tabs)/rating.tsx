import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Back from '@/components/Back';
import Button from '@/components/ButtonRed';

const RatingScreen = () => {
  const [rating, setRating] = useState(0); 
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleStarPress = (index: number) => {
    setRating(index + 1); 
  };

  const handleSubmit = () => {
    // Passa o novo score 
    router.push({
      pathname: '/yourRides',
      params: { updatedScore: rating, rideId: '1' },
    });
  };

  return (
    <View style={styles.container}>
      <Back />  

      <Image source={require('@/assets/images/bella.png')} style={styles.image} />

      <Text style={styles.subtitle}>Como foi sua viagem?</Text>

      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
            <FontAwesome
              name={index < rating ? "star" : "star-o"}
              size={30}
              color={index < rating ? "#f0c30f" : "#ccc"} 
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.commentLabel}>Comentário</Text>
      <TextInput
        style={styles.commentInput}
        placeholder="Deixe seu comentário (opcional)"
        multiline
        value={comment}
        onChangeText={setComment}
      />
      
      <View style={styles.bottomContainer}>
        <Button label="Enviar Avaliação" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    alignSelf: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  star: {
    marginHorizontal: 5,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  commentInput: {
    height: 120,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,        
    left: 20,             
    right: 20,           
  }
});

export default RatingScreen;
