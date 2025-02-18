import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// الصور
import userImage from "../assets/images/Ayco2.png"; // صورة المستخدم

// إنشاء Drawer
const Drawer = createDrawerNavigator();

// ✅ القائمة الجانبية (Aside Drawer)
function CustomDrawerContent({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.drawerContainer}>
      <View style={styles.profileSection}>
        <Image source={userImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Ehab Ayman</Text>
        <Text style={styles.profileCountry}>Egypt | +20123456789</Text>
      </View>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Overview')}>
        <Ionicons name="grid-outline" size={20} color="red" />
        <Text style={styles.drawerText}>Overview</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Accounts')}>
        <Ionicons name="wallet-outline" size={20} color="black" />
        <Text style={styles.drawerText}>Accounts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={20} color="black" />
        <Text style={styles.drawerText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Logout')}>
        <Ionicons name="log-out-outline" size={20} color="black" />
        <Text style={styles.drawerText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ✅ شاشة رئيسية تحتوي على زر لفتح القائمة الجانبية
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* زر القائمة الجانبية (☰) */}
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

// ✅ إعدادات الـ Navigation
export default function DropDown() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// ✅ الأنماط (Styles)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  menuButton: { position: 'absolute', top: 50, left: 20, zIndex: 1 },
  homeText: { fontSize: 20, fontWeight: 'bold' },

  drawerContainer: { flexGrow: 1, padding: 20, backgroundColor: '#fff' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  profileName: { fontSize: 18, fontWeight: 'bold' },
  profileCountry: { fontSize: 14, color: '#777' },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  drawerText: { fontSize: 16, marginLeft: 10 },
});
