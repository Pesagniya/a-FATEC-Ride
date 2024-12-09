import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#E54C4E',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPressed: {
    opacity: 0.8, 
  },
});
