import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup() {
  return (
    <View style={styles.container}>
        <Text style={styles.topLeftText}>
            Como você quer registrar?
        </Text>
        <View style={styles.signContainer}>
            <Link href="/signupInfo" style={styles.linkStyle}>
                <View style={styles.iconTextContainer}>
                    <Ionicons name="logo-facebook" size={40} color="#89CAFF" />
                    <Text style={styles.linkText}>Continuar com Facebook</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color="#0" />
                </View>
            </Link>
            <View style={styles.line} />
            <Link href="/signupInfo" style={styles.linkStyle}>
                <View style={styles.iconTextContainer}>
                    <Ionicons name="mail-outline" size={40} color="#0" />
                    <Text style={styles.linkText}>Cadastrar via email</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color="#0" />
                </View>
            </Link>
        </View>
        <Link href="/login" style={[styles.bottomText]}>
            Já tem uma conta?
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLeftText: {
    position: 'absolute',
    top: 30,
    left: 20,
    right: 30,
    fontSize: 24,
    fontWeight: '500',
    color: '#0',
  },
  signContainer: {
    marginTop: 100,
  },
  linkStyle: {
    marginVertical: 10,  
  },
  iconTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
    paddingLeft: 12,
    width: '100%', 
  },
  linkText: {
    fontSize: 16,
    color: '#0',
    marginLeft: 10, 
    flex: 1, 
  },
  line: {
    width: '100%', 
    height: 2, 
    backgroundColor: '#9C9EAB', 
    marginVertical: 4,
  },
  bottomText: {
    margin: 30,
    fontWeight: '500',
    textShadowColor: 'grey',   
    textShadowOffset: { width: 2, height: 4 }, 
    textShadowRadius: 8,
  },
});