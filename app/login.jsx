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
import { useNavigation } from '@react-navigation/native';
import icedCoffeeImg from "../assets/images/menu/small-cup-black-coffee-dark-background-with-coffee-beans_155165-7704.avif";

const { height } = Dimensions.get('window');

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [language, setLanguage] = useState("en");

  const navigation = useNavigation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const translations = {
    en: {
      title: "Sign In",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      loginButton: "Sign in",
      googleButton: "Login with Google",
      facebookButton: "Login with Facebook",
      phoneButton: "Login with Phone",
      forgotPassword: "Forgot Password?",
      dontHaveAccount: "Don't have an account?",
      signUpLink: "Sign Up",
    },
    ar: {
      title: "تسجيل الدخول",
      emailPlaceholder: "البريد الإلكتروني",
      passwordPlaceholder: "كلمة المرور",
      loginButton: "تسجيل الدخول",
      googleButton: "تسجيل الدخول باستخدام Google",
      facebookButton: "تسجيل الدخول باستخدام Facebook",
      phoneButton: "تسجيل الدخول باستخدام الهاتف",
      forgotPassword: "هل نسيت كلمة المرور؟",
      dontHaveAccount: "ليس لديك حساب؟",
      signUpLink: "إنشاء حساب",
    },
  };

  const t = translations[language];

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

        {/* Content Wrapper */}
        <View style={styles.wrapper}>
          {/* Title */}
          <Text
            style={[
              styles.title,
              language === "ar" ? styles.textRight : styles.textLeft,
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
            />
            <Pressable
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={[
                styles.iconInsideInput,
                language === "en" ? styles.iconRight : styles.iconLeft,
              ]}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="#ccc"
              />
            </Pressable>
          </View>

          {/* Login Button */}
     

          <Pressable style={styles.signUpButton}>
            <Text style={styles.buttonText}>{t.loginButton}</Text>
          </Pressable>



          {/* Social Buttons */}
          <Pressable style={[styles.button, styles.googleButton]}>
            <Ionicons name="logo-google" size={20} color="#fff" />
            <Text style={styles.buttonText}>{t.googleButton}</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.facebookButton]}>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.buttonText}>{t.facebookButton}</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.phoneButton]}>
            <Ionicons name="call" size={20} color="#fff" />
            <Text style={styles.buttonText}>{t.phoneButton}</Text>
          </Pressable>

          {/* Links */}
          <Text style={styles.link}>{t.forgotPassword}</Text>
          <Text style={styles.link}>
            {t.dontHaveAccount}{" "}
            <Text
              style={styles.signUpLink}
              onPress={() => navigation.navigate("signup")}
            >
              {t.signUpLink}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
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
    alignSelf: "center",
    alignItems: "center",
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
