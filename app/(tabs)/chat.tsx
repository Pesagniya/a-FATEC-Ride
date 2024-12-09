import { View, StyleSheet, Text, TextInput, FlatList, Pressable } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Image } from 'expo-image';

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  avatar: any; 
  timestamp: number;  
}

const PlaceholderImage = require('@/assets/images/apolo.png'); //

const mockContacts: Contact[] = [
  { id: '1', name: 'Carlos', lastMessage: 'Oi, tudo bem?', avatar: PlaceholderImage, timestamp: Date.now() - 5000000 },
  { id: '2', name: 'Mariana', lastMessage: 'Vamos nos encontrar amanhã?', avatar: 'PlaceholderImage', timestamp: Date.now() - 10000000 },
  { id: '3', name: 'Fernanda', lastMessage: 'Você viu meu recado?', avatar: 'PlaceholderImage', timestamp: Date.now() - 20000000 },
  { id: '4', name: 'João', lastMessage: 'Como foi o trabalho hoje?', avatar: 'PlaceholderImage', timestamp: Date.now() - 30000000 },
];

export default function ChatScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Format timestamp to show hours and minutes
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <Pressable style={styles.contactItem}>
      <View style={styles.contactAvatarContainer}>
        <Image source={typeof item.avatar === 'string' ? { uri: item.avatar } : item.avatar} style={styles.contactAvatar} />
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactLastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.contactTimestamp}>{formatTimestamp(item.timestamp)}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar conversas"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={mockContacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  contactAvatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 15,
  },
  contactAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactLastMessage: {
    fontSize: 14,
    color: '#888',
  },
  contactTimestamp: {
    fontSize: 12,
    color: '#888',
    marginLeft: 'auto',  
  },
});

