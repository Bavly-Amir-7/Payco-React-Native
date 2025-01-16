import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Adding icons
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

const App = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        {/* Title */}
        <Text style={styles.title}> Welcome to Our Coffee World ☕</Text>

        {/* Buttons with Icons */}
        <Link href="/login" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="person" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </Link>
     

        <Link href="/signup" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="person-add" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </Link>

        <Link href="/menu" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="document-text" size={24} color="#efbf04" /> {/* Changed icon */}
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>

        <Link href="/order" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="cart" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>Order Now</Text>
          </Pressable>
        </Link>

        <Link href="/cart" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="basket" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>View Cart</Text>
          </Pressable>
        </Link>

      

        <Link href="/contact" asChild>
          <Pressable style={styles.roundButton}>
            <Ionicons name="call" size={24} color="#efbf04" />
            <Text style={styles.buttonText}>Contact Us</Text>
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
    color: '#efbf04',  // اللون المطلوب
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // إضافة خلفية شبه شفافة
    padding: 10,  // إضافة حواف حول النص لزيادة التأثير
    borderRadius: 10,  // إضافة زاوية دائرية
  },
  
  roundButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // إضافة خلفية شبه شفافة
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
});
