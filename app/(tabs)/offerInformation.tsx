import { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

import Button from '@/components/ButtonRed';
import Back from '@/components/Back';
import DateComponent from '@/components/DateComponent'

export default function Offer2() {
    const router = useRouter();

    const params = useLocalSearchParams();
    const { start, kmText } = params;

    const [date, setDate] = useState('');  
    const [seats, setSeats] = useState(1);
    const [cost, setCost] = useState('5'); 

    const handleIncreaseSeats = () => {
        setSeats(prev => Math.min(prev + 1, 4));
    };

    const handleDecreaseSeats = () => {
        setSeats(prev => Math.max(prev - 1, 1)); 
    };

    const handleCostChange = (text: string) => {
        if (/^\d*\.?\d*$/.test(text)) {  // decimal input
            setCost(text); 
        }
    };

    const handleFinalize = () => {
        router.push({
            pathname: '/offerConfirmation', 
            params: {
                seats,
                cost,
                date,
                start,
                kmText
            }
        });
    };

    return (
        <View style={styles.container}>
            <Back />
            <View style={styles.form}>
                <Text style={styles.label}>Quando você fará a viagem?</Text>
                <DateComponent value={undefined}/>
                <Text style={styles.label}>Qual o número de assentos no seu carro?</Text>
                <View style={styles.seatsContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleDecreaseSeats}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.seatsText}>{seats}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleIncreaseSeats}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Quantos reais você irá cobrar por pessoa?</Text>
                <TextInput
                    style={styles.input}
                    value={cost} 
                    onChangeText={handleCostChange}
                    keyboardType="decimal-pad"
                    placeholder="Digite o valor"
                />
            </View>

            <View style={styles.bottomContainer}>
                <Button label="Finalizar" onPress={handleFinalize} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 16,
    },
    form: {
        marginTop: 80,
    },
    seatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 120,
        marginBottom: 16,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    seatsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});
