import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import icedCoffeeImg from "../assets/images/iced-coffee.png";

const Details = () => {
  const [language, setLanguage] = useState("en"); // State to store the current language

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  // Translations for text
  const translations = {
    en: {
      title: "Welcome to Our Coffee Shop ☕",
      address: "📍 Address: 123 Coffee Street, Cairo, Egypt",
      city: "🏙️ City: Giza",
      phone: "📞 Phone: +20 111 222 3333",
      email: "📧 Email: coffee@shop.com",
      aboutUs: "About Us",
      aboutText:
        "Welcome to our cozy coffee shop! We serve freshly brewed coffee, delicious pastries, and a variety of beverages to make your day better. Whether you're here for a quick takeaway or a relaxing sit-down experience, we've got you covered.",
      workingHours: "Working Hours",
      weekdays: "🕒 Monday - Friday: 7:00 AM - 9:00 PM",
      weekends: "🕒 Saturday - Sunday: 8:00 AM - 10:00 PM",
      followUs: "Follow Us",
      services: "Services",
      homeDelivery: "🚚 Home Delivery Available",
      dineIn: "🍴 Dine-In & Takeaway",
      onlineOrders: "💻 Online Orders",
      paymentMethods: "Payment Methods",
      creditCards: "💳 Credit/Debit Cards",
      cash: "💵 Cash",
      mobileWallets: "📱 Mobile Wallets",
      contactUs: "Contact Us",
      contactText:
        "Feel free to reach out to us for any inquiries or feedback. We're always here to make your coffee experience better!",
    },
    ar: {
      title: "مرحبًا بك في متجر القهوة ☕",
      address: "📍 العنوان: ١٢٣ شارع القهوة، القاهرة، مصر",
      city: "🏙️ المدينة: الجيزة",
      phone: "📞 الهاتف: +٢٠ ١١١ ٢٢٢ ٣٣٣٣",
      email: "📧 البريد الإلكتروني: coffee@shop.com",
      aboutUs: "من نحن",
      aboutText:
        "مرحبًا بك في متجر القهوة المريح! نقدم قهوة طازجة، معجنات لذيذة، ومجموعة متنوعة من المشروبات لجعل يومك أفضل. سواء كنت هنا لأخذ قهوة سريعة أو تجربة جلوس مريحة، نحن هنا لخدمتك.",
      workingHours: "ساعات العمل",
      weekdays: "🕒 الإثنين - الجمعة: ٧:٠٠ صباحًا - ٩:٠٠ مساءً",
      weekends: "🕒 السبت - الأحد: ٨:٠٠ صباحًا - ١٠:٠٠ مساءً",
      followUs: "تابعنا",
      services: "الخدمات",
      homeDelivery: "🚚 التوصيل إلى المنزل متاح",
      dineIn: "🍴 تناول الطعام في المطعم وخدمة السفري",
      onlineOrders: "💻 الطلبات عبر الإنترنت",
      paymentMethods: "طرق الدفع",
      creditCards: "💳 بطاقات الائتمان/الخصم",
      cash: "💵 نقدًا",
      mobileWallets: "📱 المحافظ الإلكترونية",
      contactUs: "تواصل معنا",
      contactText:
        "لا تتردد في التواصل معنا لأي استفسارات أو ملاحظات. نحن دائمًا هنا لتحسين تجربتك مع القهوة!",
    },
  };

  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        {/* Language Toggle Icon */}
        <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
          <Icon name="globe" size={24} color="#efbf04" />
               <Text style={styles.languageText}>{language === 'en' ? 'العربية' : 'English'}</Text>
     
        </TouchableOpacity>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.detailsBox}>
          {/* Title Section */}
          <Text style={styles.title}>{translations[language].title}</Text>

          {/* Contact Details */}
          <Text style={styles.detail}>{translations[language].address}</Text>
          <Text style={styles.detail}>{translations[language].city}</Text>
          <Text style={styles.detail}>{translations[language].phone}</Text>
          <Text style={styles.detail}>{translations[language].email}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* About Us Section */}
          <Text style={styles.subtitle}>{translations[language].aboutUs}</Text>
          <Text style={styles.detail}>{translations[language].aboutText}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Working Hours Section */}
          <Text style={styles.subtitle}>{translations[language].workingHours}</Text>
          <Text style={styles.detail}>{translations[language].weekdays}</Text>
          <Text style={styles.detail}>{translations[language].weekends}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Social Media Section */}
          <Text style={styles.subtitle}>{translations[language].followUs}</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/bavly.amir.35')}>
              <Icon name="facebook" size={40} color="#3b5998" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://x.com/Bavly_Amir')}>
              <Icon name="twitter" size={40} color="#1DA1F2" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/illll_bavly_illll/')}>
              <Icon name="instagram" size={40} color="#C13584" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/201286648310')}>
              <Icon name="whatsapp" size={40} color="#25D366" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('mailto:bavlyamir707@gmail.com')}>
              <Icon name="google" size={40} color="#DB4437" style={styles.icon} />
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Services Section */}
          <Text style={styles.subtitle}>{translations[language].services}</Text>
          <Text style={styles.detail}>{translations[language].homeDelivery}</Text>
          <Text style={styles.detail}>{translations[language].dineIn}</Text>
          <Text style={styles.detail}>{translations[language].onlineOrders}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Payment Methods Section */}
          <Text style={styles.subtitle}>{translations[language].paymentMethods}</Text>
          <Text style={styles.detail}>{translations[language].creditCards}</Text>
          <Text style={styles.detail}>{translations[language].cash}</Text>
          <Text style={styles.detail}>{translations[language].mobileWallets}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Contact Us Section */}
          <Text style={styles.subtitle}>{translations[language].contactUs}</Text>
          <Text style={styles.detail}>{translations[language].contactText}</Text>
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
  languageButton: {
    position: 'absolute', // Make the button float
    top: 5, // Adjusted to move it slightly higher
    right: 15, // Keep it aligned to the right
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Slightly darker background for visibility
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    zIndex: 1000, // Ensure it stays above other elements
  },
  languageText: {
    color: '#efbf04',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
