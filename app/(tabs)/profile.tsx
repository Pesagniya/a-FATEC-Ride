import { View, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

import ImageViewer from '@/components/ImageViewer';
import Input from '@/components/Input';

const PlaceholderImage = require('@/assets/images/apolo.png');

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<'dadosPessoais' | 'preferencias' | 'avaliacoes'>('dadosPessoais'); 

  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [car, setCar] = useState('');

  const [music, setMusic] = useState('');
  const [woman, setWoman] = useState('');
  const [talk, setTalk] = useState('');

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Operação cancelada.');
    }
  };

  const renderTabContent = () => {
    if (activeTab === 'dadosPessoais') {
      return (
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="apolo@fatec.sp.gov.br"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            theme="primary"
          />

          <Text style={styles.pick}>Curso</Text>
          <View style={styles.pickerContainer}>
          <Picker 
            selectedValue={course}
            style={styles.picker}
            onValueChange={(itemValue) => setCourse(itemValue)}
          >
            <Picker.Item label="Selecione um curso" value="" />
            <Picker.Item label="Análise e Desenvolvimento de Sistemas" value="ADS" />
            <Picker.Item label="Gestão de Qualidade" value="GI" />
          </Picker>
          </View>

          <Input
            label="Carro"
            sublabel="Adicionar veículo"
            placeholder=""
            value={car}
            onChangeText={setCar}
            theme="primary"
          />
        </View>
      );
    }

    if (activeTab === 'preferencias') {
      return (
        <View style={styles.form}>
          <Text style={styles.pick}><Ionicons name="musical-notes" size={18} color="#0" /> Música na viagem? <Ionicons name="musical-notes" size={18} color="#0" /></Text>
          <Picker
            selectedValue={music}
            style={styles.picker}
            onValueChange={(itemValue) => setMusic(itemValue)}
          >
            <Picker.Item label="Sem preferência" value="none" />
            <Picker.Item label="Sem música" value="no-music" />
            <Picker.Item label="Gosto de música" value="yes-music" />
          </Picker>

          <Text style={styles.pick}><Ionicons name="chatbubbles-outline" size={18} color="#0" /> Gosta de conversar? <Ionicons name="chatbubbles-outline" size={18} color="#0" /></Text>
          <Picker
            selectedValue={talk}
            style={styles.picker}
            onValueChange={(itemValue) => setTalk(itemValue)}
          >
            <Picker.Item label="Sem preferência" value="none" />
            <Picker.Item label="Sou bicho do mato" value="no-talk" />
            <Picker.Item label="Gosto de conversar" value="yes-talk" />
          </Picker>

          <Text style={styles.pick}><Ionicons name="female-outline" size={18} color="#0" />Apenas mulheres?<Ionicons name="female-outline" size={18} color="#0" /></Text>
          <Picker
            selectedValue={woman}
            style={styles.picker}
            onValueChange={(itemValue) => setWoman(itemValue)}
          >
            <Picker.Item label="Sem preferência" value="none" />
            <Picker.Item label="Sim" value="no-woman" />
            <Picker.Item label="Não" value="yes-woman" />
          </Picker>
        </View>
      );
    }

    if (activeTab === 'avaliacoes') {
      return (
        <View style={styles.avaliacoesContainer}>
          <Text style={styles.title}>Média de Avaliações</Text>
          
          <Text style={styles.score}>4.7</Text>

          <View style={styles.graphContainer}>
            <View style={[styles.graphBar, { width: '80%' }]} />
          </View>

          <View style={styles.separator} />

          <View style={styles.reviewsContainer}>
            <Text style={styles.review}>"Ótima experiência, motorista muito educado!"</Text>
            <Text style={styles.review}>"A viagem foi tranquila, recomendo!"</Text>
            <Text style={styles.review}>"A comunicação poderia ter sido melhor." </Text>
          </View>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          imgSource={PlaceholderImage} 
          selectedImage={selectedImage} 
          size={{ width: 200, height: 280 }} 
        />
        <Text style={styles.imageName}>Apolo</Text>

        <View style={styles.cameraButtonContainer}>
          <Ionicons
            name="camera"
            size={35}
            color="white"
            onPress={pickImageAsync}
          />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <Pressable
          style={[
            styles.tabButton,
            activeTab === 'dadosPessoais' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('dadosPessoais')}
        >
          <Text style={[styles.tabText, activeTab === 'dadosPessoais' && styles.activeTabText]}>
            Dados Pessoais
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            activeTab === 'preferencias' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('preferencias')}
        >
          <Text style={[styles.tabText, activeTab === 'preferencias' && styles.activeTabText]}>
            Preferências
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            activeTab === 'avaliacoes' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('avaliacoes')}
        >
          <Text style={[styles.tabText, activeTab === 'avaliacoes' && styles.activeTabText]}>
            Avaliações
          </Text>
        </Pressable>
      </View>

      {renderTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  imageName: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 15,
    right: -20,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  tabButton: {
    flex: 1,
    padding: 7,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 15,
    color: '#888',
    opacity: 0.6,
  },
  pick: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'left',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#0',
    borderRadius: 5,
    overflow: 'hidden',  
    marginBottom: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  activeTabText: {
    color: '#000',
    opacity: 1,
  },
  form: {
    marginTop: 25,
    width: '100%',
    paddingHorizontal: 40, 
  },
  inputContainer: {
    marginBottom: 15,
  },
  avaliacoesContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0',  
    marginBottom: 10,
  },
  graphContainer: {
    width: '80%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  graphBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  reviewsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  review: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
