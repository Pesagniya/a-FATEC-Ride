import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputProps = {
  label: string;
  sublabel?: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'decimal-pad';
  theme?: 'primary';
  editable?: boolean;
};

export default function Input({
  label,
  sublabel,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  theme,
  editable = true,
}: InputProps) {
  const getInputStyle = (theme?: string, editable?: boolean) => {
    let inputStyle = theme === 'primary' ? styles.inputPrimary : styles.input;

    if (!editable) {
      inputStyle = { ...inputStyle, ...styles.disabledInput };
    }

    return inputStyle;
  };

  return (
    <View style={styles.container}>
      {label?.trim() && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={getInputStyle(theme, editable)}
        placeholder={placeholder}
        placeholderTextColor={theme === 'primary' ? '#0' : '#FFF'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
      />
      {sublabel?.trim() && <Text style={styles.sublabel}>{sublabel}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#0',
    marginBottom: 14,
  },
  sublabel: {
    fontSize: 14,
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginTop: 4,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E54C4E',
    backgroundColor: '#E54C4E',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFF',
  },
  inputPrimary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#0',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#0',
  },
  disabledInput: {
    opacity: 0.7,
  },
});


