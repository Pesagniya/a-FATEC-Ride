import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';  

interface Ride {
    id: string;
    seats: number;
    cost: string;
    name: string;
    start: string;
    score: string;
    time1: string;
    time2: string;
    image: number;
}

interface RideItemProps {
    ride: Ride;
    onPress: (ride: Ride) => void;
    showRatingButton?: boolean;
    onRatingPress?: () => void; 
}

const RideItem: React.FC<RideItemProps> = ({ ride, onPress, showRatingButton, onRatingPress }) => {
    const router = useRouter();
    const handleRatingPress = () => {
        router.push({
            pathname: '/(tabs)/rating',  
            params: { image: ride.image.toString() }  
        });
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.rideCard,
                { backgroundColor: pressed ? '#f8d7d7' : '#fae3e3' },
            ]}
            onPress={() => onPress(ride)}
        >
            <View style={styles.topLeftContainer}>
                <View style={styles.row}>
                    <Text style={styles.timePlaceholder}>{ride.time1}</Text>
                    <View style={styles.ellipse} />
                    <Text style={styles.startText}>{ride.start}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={styles.timePlaceholder}>{ride.time2}</Text>
                    <View style={styles.ellipse} />
                    <Text style={styles.startText}>{ride.start}</Text>
                </View>
            </View>

            <Text style={styles.priceText}>R$ {ride.cost}</Text>

            <View style={styles.bottomLeftContainer}>
                <Image source={ride.image} style={styles.profileImage} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>Nome: {ride.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.scoreText}>Avaliação: {ride.score}</Text>
                        <FontAwesome name="star" size={14} color="#e6c61c" style={styles.starIcon} />
                    </View>
                </View>
            </View>

            {showRatingButton && (
                <Pressable style={styles.ratingButton} onPress={handleRatingPress}>
                    <Text style={styles.ratingButtonText}>Avalie a viagem</Text>
                </Pressable>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rideCard: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#f44336',
        position: 'relative',
        minHeight: 160,
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        width: '60%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    line: {
        width: 1,
        backgroundColor: '#fc5a53',
        height: 20,
        marginLeft: 43,
    },
    timePlaceholder: {
        fontSize: 14,
        fontWeight: '500',
        marginRight: 4,
    },
    ellipse: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#fc5a53',
        marginRight: 4,
    },
    startText: {
        fontSize: 14,
        fontWeight: '500',
    },
    priceText: {
        position: 'absolute',
        top: 16,
        right: 16,
        fontSize: 16,
        fontWeight: '500',
    },
    bottomLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 16,
        left: 16,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    detailsContainer: {
        flexDirection: 'column',
    },
    nameText: {
        fontSize: 14,
        fontWeight: '500',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    scoreText: {
        fontSize: 14,
        fontWeight: '500',
        marginRight: 4,
    },
    starIcon: {
        marginLeft: 4,
    },

    ratingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#fc5a53',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignItems: 'center',
    },
    ratingButtonText: {
        color: "white",
        fontSize: 14,
    },
});

export default RideItem;
