import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import  { useState } from 'react';

// الصور
import logo from "../assets/images/Ayco2.png"; // الشعار
import userImage from "../assets/images/Ayco2.png"; // صورة المستخدم
import balanceBg from "../assets/images/balance-bg.png"; // صورة الخلفية
import arrow from '../assets/images/Frame 14335.svg'
import user from '../assets/images/user.svg'
import Svg, { Path, Mask, G } from 'react-native-svg';



const Drawer = createDrawerNavigator();

// ✅ القائمة الجانبية (Aside Drawer)
function CustomDrawerContent({ navigation }) {
  const [activeItem, setActiveItem] = useState('Overview'); // تحديد العنصر النشط

  const AccountsIcon = ({ width = 16, height = 16, color = "#515151" }) => (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Mask id="mask0" maskUnits="userSpaceOnUse" x="-3" y="-3" width="22" height="22">
        <Path d="M18.6663 18.668H-2.66699V-2.66537H18.6663V18.668Z" fill="white"/>
      </Mask>
      <G mask="url(#mask0)">
        <Path d="M7.99996 16C6.92028 16 5.87247 15.7884 4.88591 15.3713C3.93311 14.9684 3.0778 14.3916 2.34311 13.6569C1.60843 12.9222 1.03187 12.0669 0.628747 11.1141C0.211561 10.1275 0 9.07972 0 8.00004C0 6.92036 0.211561 5.87255 0.628747 4.88599C1.03156 3.93318 1.60843 3.07788 2.34311 2.34319C3.0778 1.60851 3.93311 1.03195 4.88591 0.628826C5.87247 0.21164 6.92028 7.9155e-05 7.99996 7.9155e-05C9.07964 7.9155e-05 10.1274 0.21164 11.114 0.628826C12.0668 1.03164 12.9221 1.60851 13.6568 2.34319C14.3915 3.07788 14.9681 3.93318 15.3712 4.88599C15.7884 5.87255 15.9999 6.92036 15.9999 8.00004C15.9999 9.07972 15.7884 10.1275 15.3712 11.1141C14.9684 12.0669 14.3915 12.9222 13.6568 13.6569C12.9221 14.3916 12.0668 14.9681 11.114 15.3713C10.1274 15.7884 9.07964 16 7.99996 16ZM7.99996 0.937574C4.1056 0.937574 0.937495 4.10568 0.937495 8.00004C0.937495 11.8944 4.1056 15.0625 7.99996 15.0625C11.8943 15.0625 15.0624 11.8944 15.0624 8.00004C15.0624 4.10568 11.8943 0.937574 7.99996 0.937574Z" fill={color}/>
      </G>
    </Svg>
  );
  

  // دالة لتحديث العنصر النشط عند الضغط عليه
  const handlePress = (screen) => {
    setActiveItem(screen);
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={styles.drawerContainer}>
      {/* صورة المستخدم */}
      <View style={styles.profileSection}>
        <Image source={user} style={styles.profileImage} />
        <Text style={styles.profileName}>Ehab Ayman</Text>
        <Text style={styles.profileCountry}>Egypt | +201234107271</Text>
      </View>

      {/* القائمة الجانبية */}
      {[
        { name: 'Overview', icon: 'grid-outline' },
        { name: 'Accounts', icon: 'wallet-outline' },
        { name: 'Letters of credit', icon: 'document-text-outline' },
        { name: 'Escrow', icon: 'lock-closed-outline' },
        { name: 'Invoices', icon: 'receipt-outline' },
        { name: 'Wallets', icon: 'briefcase-outline' },
        { name: 'Contacts', icon: 'people-outline' },
        { name: 'Settings', icon: 'settings-outline' },
        { name: 'Logout', icon: 'log-out-outline' },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.drawerItem, activeItem === item.name && styles.activeItem]}
          onPress={() => handlePress(item.name)}
        >
          <Ionicons name={item.icon} size={20} color={activeItem === item.name ? 'red' : 'black'} />
          <Text style={[styles.drawerText, activeItem === item.name && styles.activeText]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
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
          <Image source={arrow} />
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

  scanButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 10, marginBottom: 20 },
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

  drawerContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#F9F9F9', // لون الخلفية العام للقائمة الجانبية
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  profileCountry: {
    fontSize: 14,
    color: '#777',
  },

  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },

  drawerText: {
    fontSize: 16,
    marginLeft: 15,
    color: 'black',
  },

  activeItem: {
    backgroundColor: '#FFE5E5', // نفس لون الخلفية اللي في الصورة للعناصر النشطة
  },

  activeText: {
    color: 'red', // نفس لون النص عند التفعيل
  },





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

