import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type ButtonProps = {
  color?: 'white';
};

export default function Back({ color }: ButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={router.back} style={styles.container}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        color={color === 'white' ? 'white' : '#000'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20, 
    left: 10, 
    padding: 10,
    zIndex: 10,
  },
});