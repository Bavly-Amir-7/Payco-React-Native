import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import icedCoffeeImg from "../assets/images/iced-coffee.png";
import xIcon from "../assets/images/menu/2fb909b74a854f0715e64dda5825990d-removebg-preview.png"; 

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
          <Text style={[styles.title, language === 'ar' && styles.rtlText]}>
            {translations[language].title}
          </Text>

          {/* Contact Details */}
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].address}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].city}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].phone}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].email}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* About Us Section */}
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].aboutUs}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].aboutText}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Working Hours Section */}
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].workingHours}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].weekdays}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].weekends}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Social Media Section */}
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].followUs}
          </Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/bavly.amir.35')}>
              <Icon name="facebook" size={40} color="#3b5998" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://x.com/Bavly_Amir')}>
              <Image source={xIcon} style={styles.xIcon} /> {/* أيقونة X */}
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
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].services}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].homeDelivery}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].dineIn}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].onlineOrders}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Payment Methods Section */}
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].paymentMethods}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].creditCards}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].cash}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].mobileWallets}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Contact Us Section */}
          <Text style={[styles.subtitle, language === 'ar' && styles.rtlText]}>
            {translations[language].contactUs}
          </Text>
          <Text style={[styles.detail, language === 'ar' && styles.rtlText]}>
            {translations[language].contactText}
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
  rtlText: {
    writingDirection: 'rtl',
    textAlign: 'right',
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
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  xIcon: {
    width: 40,
    height: 40,
  },
  divider: {
    height: 1,
    backgroundColor: 'orange',
    marginVertical: 20,
  },
  languageButton: {
    position: 'absolute',
    top: 5,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    zIndex: 1000,
  },
  languageText: {
    color: '#efbf04',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
