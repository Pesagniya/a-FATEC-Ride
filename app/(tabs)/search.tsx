import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

import DateTimePicker from '@react-native-community/datetimepicker';

import Input from '@/components/Input'; 
import Button from '@/components/ButtonRed';

export default function Signup() {
    const router = useRouter();
    const [start, setStart] = useState('');
    const destination = "Para: FATEC-Sorocaba";
    const [when, setWhen] = useState<Date>(new Date()); 
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatDateTime = (date: Date | undefined): string => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}`;
    };

    const handleSearchPress = () => {
        const dateSearch = formatDateTime(when);
        router.push({
            pathname: '/searchResults',  
            params: {
                start,
                dateSearch,
            }
        });
    };

    const showPicker = () => setShowDatePicker(true);

    const handleDateChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(false);

        if (event.type === 'set' && selectedDate) {
            setWhen(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.topLeftText}>
                Ache sua carona
                {/* icon */}
            </Text>

            <View style={styles.locationContainer}>
                <Input
                    label="Onde você está?"
                    sublabel="Utilizar localização atual"
                    placeholder="De:"
                    value={start}
                    onChangeText={setStart}
                />
                <Input
                    label=""
                    value={destination}
                    editable={false}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.pick}>Quando?</Text>
                <Pressable onPress={showPicker}>
                    <View pointerEvents="none" style={styles.textInputWrapper}>
                        <TextInput
                            style={styles.input}
                            value={when ? formatDateTime(when) : ''}
                            editable={false} 
                        />
                    </View>
                </Pressable>
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={when || new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    minimumDate={new Date()} 
                />
            )}

                    <View style={styles.bottomContainer}>
                                <Button
                                    label="Procurar"
                                    onPress={() => { handleSearchPress() }}
                                />
                    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    topLeftText: {
        position: 'absolute',
        top: 30,
        left: 20,
        fontSize: 24,
        fontWeight: '500',
        color: '#000',
    },
    locationContainer: {
        marginTop: 100,
    },
    inputContainer: {
        marginTop: 15,
    },
    pick: {
        fontSize: 16,
        marginBottom: 8,
    },
    textInputWrapper: {
        borderWidth: 1,
        borderColor: '#E54C4E',
        backgroundColor: '#E54C4E',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 16, 
        marginTop: 4,
        height: 53,
    },
    input: {
        height: 36,
        fontSize: 16,
        color: '#FFF',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,        
        left: 20,             
        right: 20,           
    }
});

