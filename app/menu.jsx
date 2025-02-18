import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// الصور
import logo from "../assets/images/Ayco2.png"; // الشعار
import userImage from "../assets/images/Ayco2.png"; // صورة المستخدم
import balanceBg from "../assets/images/balance-bg.png"; // صورة الخلفية
import arrow from '../assets/images/Frame 14335.svg'
import user from '../assets/images/user.svg'


const Drawer = createDrawerNavigator();

// ✅ القائمة الجانبية (Aside Drawer)
function CustomDrawerContent({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.drawerContainer}>
      {/* صورة المستخدم */}
      <View style={styles.profileSection}>
        <Image source={user} style={styles.profileImage} />
        <Text style={styles.profileName}>Ehab Ayman</Text>
        <Text style={styles.profileCountry}>Egypt | +20123456789</Text>
      </View>

      {/* القائمة الجانبية */}
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

// ✅ الصفحة الرئيسية (Dashboard)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity>
          <FontAwesome name="language" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* كارد الرصيد مع الخلفية */}
      <ImageBackground source={balanceBg} style={styles.balanceCard} imageStyle={styles.balanceImage}>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$25,000.40</Text>
        </View>
        <TouchableOpacity style={styles.walletButton}>
          <Text style={styles.walletText}>My Wallet</Text>
          <Image source={arrow}  />
          </TouchableOpacity>
      </ImageBackground>

      {/* زر المسح الضوئي */}
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="qr-code-outline" size={30} color="black" />
        <Text style={styles.scanText}>Scan Or Show QR Code</Text>
      </TouchableOpacity>

      {/* قائمة العمليات */}
      <ScrollView style={styles.transactions}>
        <Text style={styles.sectionTitle}>Your Recent Transactions</Text>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.transactionItem}>
            <Image source={user} style={styles.transactionImage} />
            <View>
              <Text style={styles.transactionUser}>Mohammad Adel</Text>
              <Text style={styles.transactionDetail}>Loan Payments</Text>
            </View>
            <Text style={styles.transactionAmount}>- $18.75</Text>
          </View>
        ))}
      </ScrollView>

      {/* الزر العائم */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>P</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ إعدادات الـ Navigation
export default function App() {
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


  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logo: { width: 100, height: 30 },

  balanceCard: { backgroundColor: '#f3f3f3', padding: 20, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  balanceLabel: { fontSize: 16, color: '#777' },
  balanceAmount: { fontSize: 24, fontWeight: 'bold', color: '#000' },

  scanButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  padding: 15, borderRadius: 10, marginBottom: 20 },
  scanText: { marginLeft: 10, fontSize: 16 },

  transactions: { flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  transactionImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  transactionUser: { fontSize: 16, fontWeight: 'bold' },
  transactionDetail: { color: '#777' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold', color: 'red' },

  floatingButton: { position: 'absolute', bottom: 30, right: 20, backgroundColor: 'red', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  floatingButtonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },

  drawerContainer: { flexGrow: 1, padding: 20, backgroundColor: '#fff' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  profileName: { fontSize: 18, fontWeight: 'bold' },
  profileCountry: { fontSize: 14, color: '#777' },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  drawerText: { fontSize: 16, marginLeft: 10 },




  // الكارد مع الخلفية
  balanceCard: {
    width: '100%',
    height: 120, // تحديد ارتفاع مناسب
    flexDirection: 'row', // لجعل المحتوى أفقيًا
    alignItems: 'center',
    justifyContent: 'space-between', // توزيع العناصر
    paddingHorizontal: 20, // تنسيق داخلي
    borderRadius: 15, // حواف دائرية
    overflow: 'hidden', // منع تجاوز الخلفية
  },

  balanceImage: {
    borderRadius: 15, // حواف دائرية للخلفية أيضًا
    resizeMode: 'cover', // ملء الكارد بالصورة
  },

  balanceInfo: {
    justifyContent: 'center',
  },

  balanceLabel: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },

  balanceAmount: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },

  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5, // المسافة بين النص والأيقونة
  },

  walletText: {
    fontSize: 14,
    color: '#444',
  },
});

