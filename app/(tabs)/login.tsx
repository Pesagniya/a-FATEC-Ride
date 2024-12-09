import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import Button from '@/components/ButtonRed';
import Input from '@/components/Input'; 

const Trademark = require('@/assets/images/trademark.png');

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
      return;
    }

    // placeholder
    if (email === 'apolo@fatec.sp.gov.br' && password === '123') {
      router.push('/search');
    } else {
      alert('Credenciais inválidas.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Trademark} style={styles.image} />
      </View>

      <Input
        label=""
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        label=""
        sublabel="Esqueceu sua senha?"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.footerContainer}>
        <Button label="Login" onPress={handleLogin} />
        <Text style={styles.orText}>ou</Text>
        <Button label="Registrar Conta" onPress={() => { router.push('/signup'); }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF', 
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain',
  },
  footerContainer: {
    marginTop: 70,
  },
  orText: {
    color: '#0',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
});