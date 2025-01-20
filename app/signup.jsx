import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // للتنقل بين الصفحات
import icedCoffeeImg from "../assets/images/menu/small-cup-black-coffee-dark-background-with-coffee-beans_155165-7704.avif";

const { height } = Dimensions.get('window');

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [language, setLanguage] = useState("en");

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const translations = {
    en: {
      title: "Sign Up",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Confirm Password",
      signUpButton: "Sign Up",
      googleButton: "Sign Up with Google",
      facebookButton: "Sign Up with Facebook",
      phoneButton: "Sign Up with Phone",
      alreadyHaveAccount: "Already have an account?",
      loginLink: "Sign in",
      passwordsMatch: "Passwords match",
      passwordsDoNotMatch: "Passwords do not match",
    },
    ar: {
      title: "إنشاء حساب",
      emailPlaceholder: "البريد الإلكتروني",
      passwordPlaceholder: "كلمة المرور",
      confirmPasswordPlaceholder: "تأكيد كلمة المرور",
      signUpButton: "إنشاء حساب",
      googleButton: "إنشاء حساب باستخدام Google",
      facebookButton: "إنشاء حساب باستخدام Facebook",
      phoneButton: "إنشاء حساب باستخدام الهاتف",
      alreadyHaveAccount: "هل لديك حساب بالفعل؟",
      loginLink: "تسجيل الدخول",
      passwordsMatch: "كلمات المرور متطابقة",
      passwordsDoNotMatch: "كلمات المرور غير متطابقة",
    },
  };

  const t = translations[language];

  const matchStatus = password && confirmPassword
    ? password === confirmPassword
      ? t.passwordsMatch
      : t.passwordsDoNotMatch
    : '';

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={icedCoffeeImg}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        {/* Language Toggle */}
        <Pressable
          style={[
            styles.languageButton,
            language === "ar" && styles.languageButtonAr,
          ]}
          onPress={toggleLanguage}
        >
          <Ionicons name="globe" size={24} color="#efbf04" />
                <Text style={styles.languageText}>{language === 'en' ? 'العربية' : 'English'}</Text>
      
        </Pressable>

        {/* Title */}
        <Text
          style={[
            styles.title,
            language === "en" ? styles.textLeft : styles.textRight,
          ]}
        >
          {t.title}
        </Text>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={t.emailPlaceholder}
            placeholderTextColor="#ccc"
            style={[
              styles.input,
              language === "ar" && styles.inputRight,
            ]}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={t.passwordPlaceholder}
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
            style={[
              styles.input,
              language === "ar" && styles.inputRight,
            ]}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={[
              styles.iconInsideInput,
              language === "en" ? styles.iconRight : styles.iconLeft,
            ]}
          >
            <Ionicons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#ccc"
            />
          </Pressable>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={t.confirmPasswordPlaceholder}
            placeholderTextColor="#ccc"
            secureTextEntry={!confirmPasswordVisible}
            style={[
              styles.input,
              language === "ar" && styles.inputRight,
            ]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={[
              styles.iconInsideInput,
              language === "en" ? styles.iconRight : styles.iconLeft,
            ]}
          >
            <Ionicons
              name={confirmPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#ccc"
            />
          </Pressable>
        </View>

        {/* Match Status */}
        {matchStatus !== '' && (
          <View
            style={[
              styles.matchStatusContainer,
              matchStatus === t.passwordsMatch
                ? styles.matchSuccessBackground
                : styles.matchErrorBackground,
            ]}
          >
            <Text style={styles.matchStatusText}>{matchStatus}</Text>
          </View>
        )}

        {/* Sign Up Button */}
        <Pressable style={styles.signUpButton}>
          <Text style={styles.buttonText}>{t.signUpButton}</Text>
        </Pressable>

        {/* Google Button */}
        <Pressable style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color="#fff" />
          <Text style={styles.buttonText}>{t.googleButton}</Text>
        </Pressable>

        {/* Facebook Button */}
        <Pressable style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={20} color="#fff" />
          <Text style={styles.buttonText}>{t.facebookButton}</Text>
        </Pressable>

        {/* Phone Button */}
        <Pressable style={styles.phoneButton}>
          <Ionicons name="call" size={20} color="#fff" />
          <Text style={styles.buttonText}>{t.phoneButton}</Text>
        </Pressable>

        {/* Already Have Account */}
        <Text
          style={[
            styles.link,
            language === "ar" && styles.centeredLink,
          ]}
        >
          {t.alreadyHaveAccount}{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('login')} // النقل إلى صفحة تسجيل الدخول
          >
            {t.loginLink}
          </Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    width: '100%',
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  languageButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    zIndex: 1000,
  },
  languageButtonAr: {
    right: 'auto',
    left: 15,
  },
  languageText: {
    color: '#efbf04',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  textLeft: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  textRight: {
    textAlign: 'right',
    direction: 'rtl',
  },
  inputWrapper: {
    position: 'relative',
    width: '90%',
    marginBottom: 15,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(29, 21, 21, 0.8)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
  inputRight: {
    textAlign: 'right',
  },
  iconInsideInput: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  iconRight: {
    right: 15,
  },
  iconLeft: {
    left: 15,
  },
  matchStatusContainer: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  matchSuccessBackground: {
    backgroundColor: 'rgba(0, 128, 0, 0.8)',
  },
  matchErrorBackground: {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
  },
  matchStatusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButton: {
    width: '70%',
    borderRadius: 25,
    alignSelf:"center",
    alignItems:"center",
    paddingVertical: 15,
    backgroundColor: '#6C63FF',
    alignSelf: 'center',
    marginTop: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4437',
    width: '70%',
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4267B2',
    width: '70%',
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F9D58',
    width: '70%',
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  centeredLink: {
    textAlign: 'center',
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
