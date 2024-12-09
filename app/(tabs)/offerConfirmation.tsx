import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

import Button from '@/components/ButtonRed';
import Back from '@/components/Back';

const Confirmation = require('@/assets/images/confirmation.png');

export default function Offer3() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Back />
            <View style={styles.form}>
                <Image source={Confirmation} style={styles.image} />
                <Text style={styles.label}>Sua viagem foi publicada com sucesso!</Text>
            </View>

            <View style={styles.middleContainer}>
                <Button label="Voltar para a página inicial" onPress={() => { router.push('/yourRides'); }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    form: {
        marginTop: 80,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    middleContainer: {
        position: 'absolute',
        bottom: 300,
        left: 20,
        right: 20,
    },
});
