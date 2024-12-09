import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerInputProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ value, onChange, placeholder = 'DD/MM/AAAA' }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [eDate, setDate] = useState<Date | undefined>(undefined);

  // data para exibição (DD/MM/YYYY)
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const showPicker = () => setShowDatePicker(true);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Data</Text>
      <Pressable onPress={showPicker}>
        <View pointerEvents="none" style={styles.textInputWrapper}>
          <TextInput
            style={styles.input}
            value={eDate ? formatDate(eDate) : ''}
            placeholder={placeholder}
            editable={false}
          />
        </View>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
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

export default DatePickerInput;


// change based on prop DDMMYY HH/MM
// fix time issue
