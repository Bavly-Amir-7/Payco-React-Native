import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import icedCoffeeImg from "../assets/images/menu/small-cup-black-coffee-dark-background-with-coffee-beans_155165-7704.avif";
import { useNavigation } from "@react-navigation/native";


const { height } = Dimensions.get("window");

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [language, setLanguage] = useState("en");

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
      googleButton: "تسجيل الدخول عبر جوحل",
      facebookButton: "تسجيل الدخول عبر فيسبوك",
      phoneButton: "تسجيل الدخول عبر الهاتف",
      forgotPassword: "هل نسيت كلمة المرور؟",
      dontHaveAccount: "ليس لديك حساب؟",
      signUpLink: "إنشاء حساب",
    },
  };

  const t = translations[language];

  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={icedCoffeeImg}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        {/* Header */}
        <View style={[styles.header, language === "ar" && styles.headerAr]}>
          <Text style={[styles.title, language === "ar" && styles.textRight]}>
            {t.title}
          </Text>
          <Pressable
            style={[
              styles.languageButton,
              language === "ar" && styles.languageButtonAr,
            ]}
            onPress={toggleLanguage}
          >
            <Ionicons name="globe" size={24} color="#efbf04" />
            <Text style={styles.languageText}>
              {language === "en" ? "العربية" : "English"}
            </Text>
          </Pressable>
        </View>

        {/* Content Wrapper */}
        <View style={styles.wrapper}>
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
          <Pressable style={styles.loginButton}>
            <Text style={styles.buttonText}>{t.loginButton}</Text>
          </Pressable>

          {/* Social Buttons */}
          <Pressable
            style={[
              styles.googleButton,
              language === "ar" && styles.buttonRTL,
            ]}
          >
            <Text style={styles.buttonText}>{t.googleButton}</Text>
            <Ionicons name="logo-google" size={20} color="#fff" />
          </Pressable>

          <Pressable
            style={[
              styles.facebookButton,
              language === "ar" && styles.buttonRTL,
            ]}
          >
            <Text style={styles.buttonText}>{t.facebookButton}</Text>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
          </Pressable>

          <Pressable
            style={[
              styles.phoneButton,
              language === "ar" && styles.buttonRTL,
            ]}
          >
            <Text style={styles.buttonText}>{t.phoneButton}</Text>
            <Ionicons name="call" size={20} color="#fff" />
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
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    width: "100%",
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerAr: {
    flexDirection: "row-reverse",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  languageText: {
    color: "#efbf04",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(29, 21, 21, 0.8)",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#fff",
  },
  inputRight: {
    textAlign: "right",
  },
  iconInsideInput: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  iconRight: {
    right: 15,
  },
  iconLeft: {
    left: 15,
  },
  loginButton: {
    width: "70%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "#6C63FF",
    alignSelf: "center",
    marginTop: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DB4437",
    width: "70%",
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: "center", // يضمن أن الزر في المنتصف
    marginTop: 15,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2",
    width: "70%",
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: "center", // يضمن أن الزر في المنتصف
    marginTop: 15,
  },
  phoneButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F9D58",
    width: "70%",
    borderRadius: 25,
    paddingVertical: 15,
    alignSelf: "center", // يضمن أن الزر في المنتصف
    marginTop: 15,
  },
  buttonRTL: {
    flexDirection: "row-reverse",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  link: {
    color: "#fff",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  signUpLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
