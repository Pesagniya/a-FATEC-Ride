import { useCallback, useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

import Input from '@/components/Input';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const Map = require('@/assets/images/map.png');

export default function Offer() {
    const router = useRouter();
    const [start, setStart] = useState('');
    const [destination] = useState('');
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [selectedOption, setSelectedOption] = useState('option1'); 

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.topLeftText}>Qual será o seu trajeto?</Text>

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
                    placeholder="Para: FATEC - Sorocaba"
                    value={destination}
                    editable={false}
                />
            </View>

            <Image source={Map} style={styles.image} />

            <GestureHandlerRootView style={styles.container}>
                <BottomSheet
                    ref={bottomSheetRef}
                    onChange={handleSheetChanges}
                    snapPoints={['30%', '80%']}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <Text>Selecione uma opção:</Text>
                        <View style={styles.radioButtonContainer}>
                            {['Trajeto 1', 'Trajeto 2', 'Trajeto 3'].map((label, index) => (
                                <View key={label} style={styles.optionContainer}>
                                    <Pressable
                                        style={[
                                            styles.radioButton,
                                            selectedOption === `option${index + 1}` &&
                                            styles.radioButtonSelected,
                                        ]}
                                        onPress={() => setSelectedOption(`option${index + 1}`)}
                                    >
                                        <View
                                            style={[
                                                styles.radioCircle,
                                                selectedOption === `option${index + 1}` &&
                                                styles.radioCircleSelected,
                                            ]}
                                        />
                                        <Text style={styles.radioButtonText}>{label}</Text>
                                    </Pressable>
                                    <Text style={styles.kmText}>
                                        20 km
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.separator} />
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={() => {
                                router.push({
                                    pathname: '/offerInformation', 
                                    params: {
                                        start,
                                        kmText: '20 km', 
                                    },
                                });
                            }}
                        >
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
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
    image: {
        width: '100%',
        height: 400,
        left: 20,
        bottom: 0,
        position: 'absolute',
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
    radioButtonContainer: {
        marginTop: 20,
        width: '100%',
    },
    optionContainer: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#f0f0f0',
        width: '100%',
        borderRadius: 10,
    },
    radioCircle: {
        height: 15,
        width: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioCircleSelected: {
        backgroundColor: '#000',
    },
    radioButtonText: {
        fontSize: 14,
    },
    kmText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 30, 
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginVertical: 20,
    },
    nextButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#E54C4E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
