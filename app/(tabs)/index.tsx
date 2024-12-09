import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

const BackgroundImage = require('@/assets/images/welcome.png');

export default function Index() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={BackgroundImage}
        style={styles.image}
        onLoad={() => setIsImageLoaded(true)}
      />
      {isImageLoaded && (
        <>
          <Text style={[styles.text, styles.topLeftText]}>
            Bem-vindo ao aplicativo de caronas para a Fatec Sorocaba
          </Text>
          <Link href="/login" style={[styles.text, styles.button]}>
            - Vamos Lá!
          </Link>
        </>
      )}
    </View>
  );
}

const sharedStyles = {
  fontSize: 32,
  fontFamily: 'Roboto-Bold',
  color: '#fff',
  textShadowColor: 'black',   
  textShadowOffset: { width: 1, height: 1 }, 
  textShadowRadius: 7,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    position: 'absolute', 
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
  },
  text: {
    ...sharedStyles,
  },
  topLeftText: {
    position: 'absolute',
    top: 30,
    left: 40,
    right: 30,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    ...sharedStyles,
  },
});
