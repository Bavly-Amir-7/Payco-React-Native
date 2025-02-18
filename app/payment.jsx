import React from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import user from '../assets/images/user.svg';

const contacts = Array(5).fill({ name: 'AYMAN SHAHED', time: '17h' });

const PayRequest = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/insertAmount');
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      
      {/* QR Code Section */}
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="qr-code-outline" size={30} color="black" />
        <Text style={styles.scanText}>Scan Or Show QR Code</Text>
      </TouchableOpacity>
      
      {/* Top People */}
      <Text style={styles.sectionTitle}>TOP PEOPLE</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={handlePress}>
            <Image source={user} style={styles.transactionImage} />
            <View>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      {/* Contacts Section */}
      <View style={styles.contactsHeader}>
        <Text style={styles.sectionTitle}>CONTACTS</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>SORT BY : NAME</Text>
          <Ionicons name="chevron-down" size={16} color="red" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={handlePress}>
            <Image source={user} style={styles.transactionImage} />
            <Text style={styles.contactName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1 },
  qrSection: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  qrTitle: { fontSize: 16, fontWeight: 'bold' },
  qrSubtitle: { fontSize: 12, color: '#777' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginVertical: 10 },
  contactItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  contactImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  contactName: { fontSize: 14, fontWeight: 'bold' },
  contactTime: { fontSize: 12, color: '#777' },
  contactsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  sortButton: { flexDirection: 'row', alignItems: 'center' },
  sortText: { fontSize: 12, color: 'red', marginRight: 5 },
  transactions: { flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  transactionImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  transactionUser: { fontSize: 16, fontWeight: 'bold' },
  transactionDetail: { color: '#777' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold', color: 'red' },
  scanButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 10, marginBottom: 20 },
  scanText: { marginLeft: 10, fontSize: 16 },
});

export default PayRequest;