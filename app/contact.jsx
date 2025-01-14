import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import icedCoffeeImg from "../assets/images/iced-coffee.png";

const Details = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView contentContainerStyle={styles.detailsBox}>
          <Text style={styles.title}>Welcome to Our Coffee Shop ☕</Text>
          <Text style={styles.detail}>
            📍 **Address:** 123 Coffee Street, Cairo, Egypt
          </Text>
          <Text style={styles.detail}>🏙️ **City:** Giza</Text>
          <Text style={styles.detail}>📞 **Phone:** +20 111 222 3333</Text>
          <Text style={styles.detail}>📧 **Email:** coffee@shop.com</Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>About Us</Text>
          <Text style={styles.detail}>
            Welcome to our cozy coffee shop! We serve freshly brewed coffee, delicious pastries, and a variety of beverages to make your day better. Whether you're here for a quick takeaway or a relaxing sit-down experience, we've got you covered.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>Working Hours</Text>
          <Text style={styles.detail}>🕒 Monday - Friday: 7:00 AM - 9:00 PM</Text>
          <Text style={styles.detail}>🕒 Saturday - Sunday: 8:00 AM - 10:00 PM</Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>Social Media</Text>
          <Text style={styles.detail}>📱 Instagram: @CoffeeShopOfficial</Text>
          <Text style={styles.detail}>🐦 Twitter: @CoffeeShopEG</Text>
          <Text style={styles.detail}>📘 Facebook: CoffeeShop</Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>Services</Text>
          <Text style={styles.detail}>🚚 Home Delivery Available</Text>
          <Text style={styles.detail}>🍴 Dine-In & Takeaway</Text>
          <Text style={styles.detail}>💻 Online Orders</Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>Payment Methods</Text>
          <Text style={styles.detail}>💳 Credit/Debit Cards</Text>
          <Text style={styles.detail}>💵 Cash</Text>
          <Text style={styles.detail}>📱 Mobile Wallets</Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>Contact Us</Text>
          <Text style={styles.detail}>
            Feel free to reach out to us for any inquiries or feedback. We're always here to make your coffee experience better!
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  detailsBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: 'orange',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
  },
  detail: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'orange',
    marginVertical: 20,
  },
});
