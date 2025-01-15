import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import icedCoffeeImg from "../assets/images/iced-coffee.png";

const Details = () => {
  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.detailsBox}>
          {/* Title Section */}
          <Text style={styles.title}>Welcome to Our Coffee Shop ☕</Text>

          {/* Contact Details */}
          <Text style={styles.detail}>📍 **Address:** 123 Coffee Street, Cairo, Egypt</Text>
          <Text style={styles.detail}>🏙️ **City:** Giza</Text>
          <Text style={styles.detail}>📞 **Phone:** +20 111 222 3333</Text>
          <Text style={styles.detail}>📧 **Email:** coffee@shop.com</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* About Us Section */}
          <Text style={styles.subtitle}>About Us</Text>
          <Text style={styles.detail}>
            Welcome to our cozy coffee shop! We serve freshly brewed coffee, delicious pastries, and a variety of beverages to make your day better. Whether you're here for a quick takeaway or a relaxing sit-down experience, we've got you covered.
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Working Hours Section */}
          <Text style={styles.subtitle}>Working Hours</Text>
          <Text style={styles.detail}>🕒 Monday - Friday: 7:00 AM - 9:00 PM</Text>
          <Text style={styles.detail}>🕒 Saturday - Sunday: 8:00 AM - 10:00 PM</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Social Media Section */}
          <Text style={styles.subtitle}>Follow Us</Text>
          <View style={styles.socialIcons}>
            {/* Facebook Icon */}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/bavly.amir.35')}>
              <Icon name="facebook" size={40} color="#3b5998" style={styles.icon} />
            </TouchableOpacity>

            {/* Twitter (X) Icon */}
            <TouchableOpacity onPress={() => Linking.openURL('https://x.com/Bavly_Amir')}>
              <Icon name="twitter" size={40} color="#1DA1F2" style={styles.icon} />
            </TouchableOpacity>

            {/* Instagram Icon */}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/illll_bavly_illll/')}>
              <Icon name="instagram" size={40} color="#C13584" style={styles.icon} />
            </TouchableOpacity>

            {/* WhatsApp Icon */}
            <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/201286648310')}>
              <Icon name="whatsapp" size={40} color="#25D366" style={styles.icon} />
            </TouchableOpacity>

            {/* Google Mail Icon */}
            <TouchableOpacity onPress={() => Linking.openURL('mailto:bavlyamir707@gmail.com')}>
              <Icon name="google" size={40} color="#DB4437" style={styles.icon} />
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Services Section */}
          <Text style={styles.subtitle}>Services</Text>
          <Text style={styles.detail}>🚚 Home Delivery Available</Text>
          <Text style={styles.detail}>🍴 Dine-In & Takeaway</Text>
          <Text style={styles.detail}>💻 Online Orders</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Payment Methods Section */}
          <Text style={styles.subtitle}>Payment Methods</Text>
          <Text style={styles.detail}>💳 Credit/Debit Cards</Text>
          <Text style={styles.detail}>💵 Cash</Text>
          <Text style={styles.detail}>📱 Mobile Wallets</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Contact Us Section */}
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

// Styles Section
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background overlay
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  title: {
    color: 'white', // Title text color
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: 'orange', // Subtitle text color
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
  },
  detail: {
    color: 'white', // Detail text color
    fontSize: 18,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row', // Align icons in a row
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10, // Horizontal spacing for icons
  },
  divider: {
    height: 1, // Divider line height
    backgroundColor: 'orange', // Divider line color
    marginVertical: 20,
  },
});
