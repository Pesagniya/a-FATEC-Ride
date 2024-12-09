import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import Back from '@/components/Back'; 
import Button from '@/components/ButtonRed';

export default function RideScreen() {
  const params = useLocalSearchParams();
  const { id, seats, cost, name, start, score, time1, time2, image } = params;

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Back />
        <Text style={styles.title}>Dados da carona</Text> 
      </View>

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.topLeftContainer}>
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <Text style={styles.timePlaceholder}>{time1}</Text>
              <Text style={styles.timePlaceholder}>{time2}</Text>
            </View>
            <Image source={require('@/assets/images/traject.png')} style={styles.image} />
            <View style={styles.column}>
              <Text style={styles.startText}>{start}</Text>
              <View style={styles.ellipseContainer}>
                <View style={styles.ellipse} />
                <Text style={styles.ellipseText}>220m da sua localização</Text>
                <Ionicons name="chevron-forward-outline" size={18} color="#000" />
              </View>
              <Text style={styles.startText}>FATEC - Sorocaba</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Preço Total</Text>
          <Text style={styles.priceValue}>{cost}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Image source={require('@/assets/images/bella.png')} style={styles.profileImage} />
            <Text style={styles.profileName}>{name}</Text>
          </View>
          <Text style={styles.scoreText}>Classificação média: {score} <Ionicons name="star" size={18} color="#FFC300" /></Text>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#007AFF" style={styles.chatIcon} />
        </View>

        <View style={styles.separator} />

        <View style={styles.newSectionContainer}>
          <View style={styles.newLeftSection}>
            <Image source={require('@/assets/images/car.png')} style={styles.newImage} />
            <Text style={styles.newSubtitle}>Honda Civic</Text>
          </View>

          <View style={styles.newRightSection}>
            <View style={styles.newColumn}>
              <Text style={styles.newTextItem}>Cor: Prata</Text>
              <Text style={styles.newTextItem}>Ano: 2014</Text>
            </View>
            <View style={styles.newColumn}>
              <Text style={styles.newTextItem}>Vagas: 2</Text>
              <Text style={styles.newTextItem}>Placa: ABC1D23</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />
      </ScrollView>

      <Button label="Solicite sua reserva"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButtonContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  title: {
    paddingLeft: 56,
    paddingTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', 
  },
  image: {
    width: '20%',
    height: 140,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  detailsContainer: {
    marginTop: 10,
  },
  timePlaceholder: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 70,
  },
  startText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 30, 
  },
  ellipseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: -20,
  },
  ellipse: {
    width: 12,
    height: 12,
    borderRadius: 10, 
    backgroundColor: '#fc5a53',
  },
  ellipseText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  chatIcon: {
    marginLeft: 10,
  },
  newSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  newLeftSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
  },
  newImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  newSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  newRightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  newColumn: {
    width: '45%', 
  },
  newTextItem: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  topLeftContainer: {
    top: 16,
    left: 16,
    width: '60%',
  },
  columnsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  column: {
    alignItems: 'center', 
  },
});
