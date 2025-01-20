import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Adding icons
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

const App = () => {
  const [language, setLanguage] = useState("en"); // State to store the current language

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  // Translations for the text
  const translations = {
    en: {
      title: "Welcome to Our Coffee World ☕",
      signIn: "Sign in",
      signUp: "Sign Up",
      menu: "Menu",
      orderNow: "Order Now",
      viewCart: "View Cart",
      contactUs: "Contact Us",
      currentLanguage: "العربية",
    },
    ar: {
      title: "مرحبًا بك في عالم القهوة ☕",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      menu: "القائمة",
      orderNow: "اطلب الآن",
      viewCart: "عرض السلة",
      contactUs: "اتصل بنا",
      currentLanguage: "English",
    },
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        {/* Language Toggle Icon */}
        <Pressable style={styles.languageButton} onPress={toggleLanguage}>
          <Ionicons name="globe" size={24} color="#efbf04" />
          <Text style={styles.languageText}>
            {translations[language].currentLanguage}
          </Text>
        </Pressable>

        {/* Title */}
        <Text style={styles.title}>{translations[language].title}</Text>

        {/* Buttons with Icons */}
        <Link href="/login" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="person" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].signIn}</Text>
          </Pressable>
        </Link>
     
        <Link href="/signup" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="person-add" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].signUp}</Text>
          </Pressable>
        </Link>

        <Link href="/menu" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="document-text" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].menu}</Text>
          </Pressable>
        </Link>

        <Link href="/order" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="cart" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].orderNow}</Text>
          </Pressable>
        </Link>

        <Link href="/cart" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="basket" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].viewCart}</Text>
          </Pressable>
        </Link>

        <Link href="/contact" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="call" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>{translations[language].contactUs}</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent overlay
  },
  title: {
    color: '#efbf04',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 10,
  },
  roundButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 220,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  buttonText: {
    color: '#efbf04',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 50,
  },
  languageText: {
    color: '#efbf04',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
