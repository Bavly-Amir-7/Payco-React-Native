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
import { useNavigation } from "@react-navigation/native";
import icedCoffeeImg from "../assets/images/menu/small-cup-black-coffee-dark-background-with-coffee-beans_155165-7704.avif";

const { height } = Dimensions.get("window");

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [language, setLanguage] = useState("en");

  const navigation = useNavigation();

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
      googleButton: "Sign Up with Google ",
      facebookButton: "Sign Up with Facebook ",
      phoneButton: "Sign Up with Phone ",
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
      googleButton: "إنشاء حساب عبر جوجل ",
      facebookButton: "إنشاء حساب عبر فيسبوك ",
      phoneButton: "إنشاء حساب عبر الهاتف ",
      alreadyHaveAccount: "هل لديك حساب بالفعل؟",
      loginLink: "تسجيل الدخول",
      passwordsMatch: "كلمات المرور متطابقة",
      passwordsDoNotMatch: "كلمات المرور غير متطابقة",
    },
  };

  const t = translations[language];

  const matchStatus =
    password && confirmPassword
      ? password === confirmPassword
        ? t.passwordsMatch
        : t.passwordsDoNotMatch
      : "";

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
          {/* Title */}
          <Text style={[styles.title, language === "ar" && styles.textRight]}>
            {t.title}
          </Text>
          {/* Language Button */}
          <Pressable style={styles.languageButton} onPress={toggleLanguage}>
            <Ionicons name="globe" size={24} color="#efbf04" />
            <Text style={styles.languageText}>
              {language === "en" ? "العربية" : "English"}
            </Text>
          </Pressable>
        </View>

        <View style={styles.wrapper}>
          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={t.emailPlaceholder}
              placeholderTextColor="#ccc"
              style={[styles.input, language === "ar" && styles.inputRight]}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={t.passwordPlaceholder}
              placeholderTextColor="#ccc"
              secureTextEntry={!passwordVisible}
              style={[styles.input, language === "ar" && styles.inputRight]}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={[
                styles.iconInsideInput,
                language === "ar" && styles.iconLeft,
              ]}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
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
              style={[styles.input, language === "ar" && styles.inputRight]}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Pressable
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              style={[
                styles.iconInsideInput,
                language === "ar" && styles.iconLeft,
              ]}
            >
              <Ionicons
                name={confirmPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="#ccc"
              />
            </Pressable>
          </View>

          {/* Match Status */}
          {matchStatus !== "" && (
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

          {/* Already Have Account */}
          <Text style={[styles.link, language === "ar" && styles.centeredLink]}>
            {t.alreadyHaveAccount}{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("login")}
            >
              {t.loginLink}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

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
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  textRight: {
    textAlign: "right",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputWrapper: {
    position: "relative",
    width: "90%",
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
    right: 15,
  },
  iconLeft: {
    right: "auto",
    left: 15,
  },
  matchStatusContainer: {
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  matchSuccessBackground: {
    backgroundColor: "rgba(0, 128, 0, 0.8)",
  },
  matchErrorBackground: {
    backgroundColor: "rgba(255, 0, 0, 0.8)",
  },
  matchStatusText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpButton: {
    width: "70%",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#6C63FF",
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
    marginTop: 15,
  },
  buttonRTL: {
    flexDirection: "row-reverse",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  centeredLink: {
    textAlign: "center",
  },
  loginLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
