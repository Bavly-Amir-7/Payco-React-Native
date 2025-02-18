import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useRouter } from 'expo-router'; // ✅ استبدال useNavigation
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


import image1 from "../assets/images/computer.png";
import image2 from "../assets/images/Ayco2.png";
import DropDown from './order';

export default function LoginPage({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [email, setEmail] = useState(""); // ✅ تعريف البريد الإلكتروني
  const [password, setPassword] = useState(""); // ✅ تعريف كلمة المرور
  const [error, setError] = useState(null); // ✅ تعريف error
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter(); // ✅ استخدم useRouter للتنقل

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 🛠️ **دالة تسجيل الدخول**
  const handleLogin = async () => {
    setError(null);
  
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
  
    try {
      console.log("🔵 Sending request...");
      const response = await fetch("https://your-api.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log("🟢 Response status:", response.status);
      const text = await response.text();
      console.log("🟠 Raw response:", text);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}, ${text}`);
      }
  
      if (!text || !text.trim()) {
        throw new Error("Empty response from server");
      }
  
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("Invalid server response format");
      }
  
      console.log("✅ Parsed data:", data);
  
      if (data.accessToken && data.refreshToken) {
        await AsyncStorage.setItem("accessToken", data.accessToken);
        await AsyncStorage.setItem("refreshToken", data.refreshToken);
      }
  
      if (rememberMe) {
        await AsyncStorage.setItem("savedEmail", email);
        await AsyncStorage.setItem("savedPassword", password);
      } else {
        await AsyncStorage.removeItem("savedEmail");
        await AsyncStorage.removeItem("savedPassword");
      }
  
      Alert.alert("Login Successful!");
      router.push("/dashboard");
    } catch (err) {
      console.error("🔴 Login Error:", err.message);
      setError(err.message);
      Alert.alert("Error", err.message);
    }
  };
  

 



  const googleSvg = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2795_60742)">
    <path d="M5.77203 14.5027L4.93663 17.6213L1.88323 17.6859C0.970719 15.9934 0.453125 14.057 0.453125 11.9992C0.453125 10.0093 0.937063 8.13277 1.79488 6.48047H1.79553L4.51391 6.97884L5.70472 9.68091C5.45548 10.4075 5.31964 11.1875 5.31964 11.9992C5.31973 12.88 5.4793 13.724 5.77203 14.5027Z" fill="#FBBB00"/>
    <path d="M24.2433 9.75781C24.3811 10.4837 24.453 11.2334 24.453 11.9996C24.453 12.8587 24.3627 13.6967 24.1906 14.5051C23.6064 17.2558 22.08 19.6578 19.9655 21.3576L19.9649 21.3569L16.541 21.1822L16.0564 18.1572C17.4594 17.3343 18.5559 16.0466 19.1335 14.5051H12.7168V9.75781H19.2271H24.2433Z" fill="#518EF8"/>
    <path d="M19.9655 21.3577L19.9662 21.3584C17.9097 23.0113 15.2974 24.0004 12.4537 24.0004C7.88379 24.0004 3.91062 21.4461 1.88379 17.6872L5.77259 14.5039C6.78598 17.2085 9.39499 19.1338 12.4537 19.1338C13.7684 19.1338 15.0001 18.7784 16.057 18.158L19.9655 21.3577Z" fill="#28B446"/>
    <path d="M20.1127 2.76262L16.2253 5.94525C15.1314 5.26153 13.8384 4.86656 12.4532 4.86656C9.32525 4.86656 6.66744 6.88017 5.70481 9.68175L1.79558 6.48131H1.79492C3.79208 2.63077 7.81536 0 12.4532 0C15.3648 0 18.0345 1.03716 20.1127 2.76262Z" fill="#F14336"/>
  </g>
  <defs>
    <clipPath id="clip0_2795_60742">
      <rect width="24" height="24" fill="white" transform="translate(0.453125)"/>
    </clipPath>
  </defs>
</svg>`;




  return (


    
    <View style={styles.container}>
      <View style={styles.content}>
        {/* صورة الكمبيوتر (مخفي على الموبايل) */}
        <View style={styles.computer}>
          <Image source={image1} style={styles.computerImage} resizeMode="contain" />
        </View>

        {/* منطقة تسجيل الدخول */}
        <View style={styles.loginArea}>
          <View style={styles.formContainer}>
            <View style={styles.imageParent}>
              <Image source={image2} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>Welcome Back</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={18} color="black" />
                <View style={styles.divider}></View>
                <TextInput
                  placeholder="username@gmail.com"
                  style={styles.input}
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                />
              </View>
            </View>




            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={18} color="black" />
                <View style={styles.divider}></View>
                <TextInput
                  placeholder="********"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Ionicons name={showPassword ? "eye" : "eye-off"} size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rememberForgetContainer}>
              {/* Remember me */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)} // تحديث حالة Remember me
              >
                <Ionicons
                  name={rememberMe ? "checkbox" : "square-outline"} // تغيير الأيقونة بناءً على الحالة
                  size={18}
                  color="black"
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              {/* Forgot Password */}
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>


            <View style={styles.separator}>
              <Text style={styles.separatorText}>OR</Text>
            </View>


            <TouchableOpacity style={styles.googleButton}>
              <View style={styles.googleSearch}>
                <SvgXml xml={googleSvg} width="25" height="24" />
                <Text style={styles.googleText}>Sign up with Google</Text>
              </View>
            </TouchableOpacity>


            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => setShowTerms(true)}>
                <Text style={styles.signupLink}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* الشروط والأحكام */}
      <Modal visible={showTerms} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Title */}
            <Text style={styles.modalTitle}>
              To continue signing up, you have to agree to our{" "}
              <Text style={styles.modalLink}>Terms of Service</Text> and{" "}
              <Text style={styles.modalLink}>Privacy Policy</Text>.
            </Text>

            {/* Subtitle */}
            <Text style={styles.modalSubtitle}>
              Our Terms of Service & Privacy Policy
            </Text>

            {/* Scrollable Terms */}
            <ScrollView style={styles.termsContainer}>
              <Text style={styles.termsText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, saepe facilis molestias iure veritatis minus
                aspernatur recusandae placeat blanditiis molestiae omnis?
                Deleniti doloribus molestiae repudiandae incidunt,
                necessitatibus sint voluptates quas. Aperiam quibusdam
                eveniet voluptas tempora tenetur architecto culpa maiores
                cumque? Eius recusandae accusamus veniam nam velit adipisci
                tempora dolorum quidem, ad odit soluta aperiam eligendi iste
                harum repellendus laborum commodi? Totam amet non distinctio
                ducimus atque voluptatem eos ipsum assumenda doloribus.
              </Text>
            </ScrollView>

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowTerms(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowTerms(false);
                  router.push('/signup'); // ✅ استخدم router.push للانتقال
                }}
              >
                <Text style={styles.modalButtonText}>I Agree</Text>
              </TouchableOpacity>

            </View>
          </View>


        </View>
      </Modal>

    </View>
  );
}

// 🌟 **الأنماط**
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flexDirection: "row", flex: 1 },
  computer: { flex: 1, justifyContent: "center", alignItems: "center", display: "none" },
  computerImage: { width: "60%", height: "60%" },
  loginArea: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F3F3F3" },
  formContainer: { width: "80%" },
  imageParent: { alignItems: "center", marginBottom: 20 },
  logo: { width: 100, height: 40 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  inputContainer: { marginBottom: 15 },
  label: { color: "#333", marginBottom: 5 },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, backgroundColor: "#fff" },
  input: { flex: 1, padding: 10 },
  rememberForgetContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  rememberText: { marginLeft: 5 },
  forgotText: { color: "#777" },
  loginButton: { backgroundColor: "#E74C3C", padding: 15, borderRadius: 5, alignItems: "center" },
  loginButtonText: { color: "#fff", fontSize: 16 },
  separator: { alignItems: "center", marginVertical: 15 },
  separatorText: { color: "#777" },
  googleButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 5 },
  googleText: { marginLeft: 5 },
  signupContainer: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  signupText: { color: "#777" },
  signupLink: { color: "#E74C3C", fontWeight: "bold" },
  modalContainer: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%" },
  modalTitle: { fontSize: 18, textAlign: "center", marginBottom: 10 },
  modalLink: { color: "#E74C3C", textAlign: "center" },
  termsTextContainer: { maxHeight: 200, marginVertical: 10 },
  termsText: { color: "#333" },
  modalButtons: { flexDirection: "row", justifyContent: "space-around" },
  modalButton: { backgroundColor: "#E74C3C", padding: 10, borderRadius: 5 },
  modalButtonText: { color: "#fff" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  modalLink: {
    color: "#E74C3C",
    textDecorationLine: "underline",
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E74C3C",
    marginBottom: 15,
    textAlign: "center",
  },
  termsContainer: {
    height: 200,
    marginBottom: 15,
    paddingRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  googleSearch: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",

  },
  googleText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginLeft: 8,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#333",
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 40,
  },
  divider: {
    width: 1,
    height: "60%",
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
    color: "#333",
  },



});
