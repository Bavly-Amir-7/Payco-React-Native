import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import icedCoffeeImg from "../assets/images/menu/coffe-splash-mug-black-background_123827-26338.avif"; // Background image
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '../constants/MenuItems';
import MenuImages from '../constants/MenuImages';
import { Ionicons } from '@expo/vector-icons'; // For the language toggle icon
import { useNavigation } from '@react-navigation/native';

export default function OrderScreen() {
  const [orderCount, setOrderCount] = useState({});
  const [language, setLanguage] = useState('en'); // State for language toggle
  const navigation = useNavigation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const translations = {
    en: {
      confirmOrder: 'Confirm Order',
      ordered: 'Ordered',
      add: 'Add',
      remove: 'Remove',
      alert: 'Please add items to your order before confirming!',
    },
    ar: {
      confirmOrder: 'تأكيد الطلب',
      ordered: 'الكمية المطلوبة',
      add: 'إضافة',
      remove: 'إزالة',
      alert: 'يرجى إضافة عناصر إلى طلبك قبل التأكيد!',
    },
  };

  const t = translations[language];

  // Handle adding items to the order
  const addItem = (itemId) => {
    setOrderCount((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Handle removing items from the order
  const removeItem = (itemId) => {
    setOrderCount((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  // Navigate to Cart page
  const handleConfirmOrder = () => {
    const orderDetails = MENU_ITEMS.filter((item) => orderCount[item.id] > 0).map((item) => ({
      id: item.id,
      title: language === 'ar' ? item.title_ar : item.title,
      description: language === 'ar' ? item.description_ar : item.description,
      count: orderCount[item.id],
    }));

    if (orderDetails.length > 0) {
      navigation.navigate('cart', { order: orderDetails });
    } else {
      alert(t.alert);
    }
  };

  const theme = Colors.light;
  const styles = createStyles(theme, language);

  return (
    <ScrollView>
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.imageBackground}>
        {/* Language Toggle */}
        <Pressable style={styles.languageButton} onPress={toggleLanguage}>
          <Ionicons name="globe" size={24} color="#fff" />
          <Text style={styles.languageText}>{language === 'en' ? 'العربية' : 'English'}</Text>
        </Pressable>

        <FlatList
          data={MENU_ITEMS}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={MenuImages[item.id - 1]} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {language === 'ar' ? item.title_ar : item.title}
                </Text>
                <Text style={styles.cardDescription}>
                  {language === 'ar' ? item.description_ar : item.description}
                </Text>
                <Text style={styles.orderCount}>
                  {t.ordered}: {orderCount[item.id] || 0}
                </Text>
                <View style={styles.buttonGroup}>
                  <Pressable style={styles.addButton} onPress={() => addItem(item.id)}>
                    <Text style={styles.addButtonText}>{t.add}</Text>
                  </Pressable>
                  <Pressable style={styles.removeButton} onPress={() => removeItem(item.id)}>
                    <Text style={styles.removeButtonText}>{t.remove}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
        <Pressable style={styles.confirmButton} onPress={handleConfirmOrder}>
          <Text style={styles.confirmButtonText}>{t.confirmOrder}</Text>
        </Pressable>
      </ImageBackground>
    </ScrollView>
  );
}

function createStyles(theme, language) {
  return StyleSheet.create({
    imageBackground: {
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'cover',
    },
    contentContainer: {
      paddingTop: 20,
      paddingBottom: 30,
      paddingHorizontal: 12,
    },
    card: {
      backgroundColor: '#FFF5E4',
      borderRadius: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 6,
      overflow: 'hidden',
      flexDirection: language === 'ar' ? 'row-reverse' : 'row',
      padding: 10,
    },
    cardImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    cardContent: {
      flex: 1,
      paddingLeft: 10,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4B2E83',
      marginBottom: 5,
      textAlign: language === 'ar' ? 'right' : 'left',
    },
    cardDescription: {
      fontSize: 16,
      color: '#6B4F4F',
      marginBottom: 10,
      textAlign: language === 'ar' ? 'right' : 'left',
    },
    orderCount: {
      fontSize: 16,
      color: '#4B2E83',
      marginBottom: 10,
      textAlign: language === 'ar' ? 'right' : 'left',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addButton: {
      backgroundColor: '#8B4513',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
    removeButton: {
      backgroundColor: '#FF6347',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    removeButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
    confirmButton: {
      marginTop: 20,
      paddingVertical: 14,
      paddingHorizontal: 30,
      backgroundColor: '#4B2E83',
      borderRadius: 10,
      alignSelf: 'center',
    },
    confirmButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
    },
    languageButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#333',
      borderRadius: 50,
      margin: 10,
      alignSelf: 'flex-end',
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    languageText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
    },
  });
}
