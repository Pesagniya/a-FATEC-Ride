import { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

import ButtonRed from '@/components/ButtonRed';
import Input from '@/components/Input'; 
import Back from '@/components/Back'; 

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const formatDate = (date: Date | undefined): string => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const showPicker = () => setShowDatePicker(true);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Back />
      <Text style={styles.title}>Informações de Cadastro</Text>

      <View style={styles.form}>
        <Input
          label="Nome"
          placeholder=""
          value={name}
          onChangeText={setName}
          theme="primary"
        />

        <View style={styles.inputContainer}>
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
        </View>

        <Input
          label="Email"
          placeholder=""
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          theme="primary"
        />

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.pick}>Data de Nascimento</Text>
            <Pressable onPress={showPicker}>
              <View pointerEvents="none" style={styles.textInputWrapper}>
                <TextInput
                  style={styles.input}
                  value={birthDate ? formatDate(birthDate) : ''}
                  placeholder="DD/MM/AA"
                  editable={false} 
                />
              </View>
            </Pressable>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={birthDate || new Date()}
              mode="date"
              display="default" 
              onChange={handleDateChange}
              maximumDate={new Date()} 
            />
          )}

          <View style={styles.genderContainer}>
            <Text style={styles.pick}>Gênero</Text>
            <View style={styles.pickerContainer}> 
              <Picker
                selectedValue={gender}
                style={styles.picker}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
              </Picker>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <ButtonRed label="Registrar" onPress={() => { router.push('/search'); }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  form: {
    marginTop: 40,
    paddingBottom: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0',
  },
  inputContainer: {
    marginBottom: 15,
  },
  pick: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#0',
    borderRadius: 5,
    overflow: 'hidden',  
    marginTop: 5,
  },
  picker: {
    height: 50,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  genderContainer: {
    flex: 1,
    marginLeft: 10
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,        
    left: 20,             
    right: 20,           
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: '#0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16, 
    marginTop: 4,
    height: 53,
  },
  input: {
    height: 36,
    fontSize: 16,
  },
});

