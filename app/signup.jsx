import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import image2 from "../assets/images/Ayco2.png";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router'; // ✅ استخدم useRouter
import { Alert } from 'react-native';



export default function SignPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  // تحقق من قوة كلمة المرور
  const validatePassword = (pass, retype) => ({
    length: pass.length >= 8,
    uppercase: /[A-Z]/.test(pass),
    number: /[0-9]/.test(pass),
    special: /[@#$%^&*]/.test(pass),
    lowercase: /[a-z]/.test(pass),
    match: pass === retype,
  });

  const passwordValid = validatePassword(password, retypePassword);

  // دالة التسجيل
  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    if (!passwordValid.match) {
      Alert.alert("خطأ", "كلمتا المرور غير متطابقتين");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://your-api.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error(`خطأ في تحليل الاستجابة من السيرفر (${response.status})`);
      }


      if (!response.ok) {
        throw new Error(data.message || `خطأ غير معروف (${response.status})`);
      }

      Alert.alert("تم التسجيل بنجاح!", "يرجى التحقق من البريد الإلكتروني لتأكيد الحساب.");
      router.push("/login"); // الانتقال لصفحة تسجيل الدخول بعد النجاح

    } catch (err) {
      console.error("Signup Error:", err.message);
      setError(err.message);
      Alert.alert("خطأ", err.message);
    }

    setLoading(false);
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image source={image2} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome Back</Text>


        {error && <Text style={styles.errorText}>{error}</Text>}


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={18} color="black" />
            <View style={styles.divider}></View>
            <TextInput
              placeholder="example@gmail.com"
              style={styles.input}
              keyboardType="email-address"
              value={email} // ✅ ربط الإدخال بالحالة
              onChangeText={setEmail} // ✅ تحديث الحالة عند الكتابة
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Create Password</Text>
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
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>


        <View>
          {Object.entries(passwordValid).slice(0, 5).map(([key, valid]) => (
            <Text key={key} style={valid ? styles.validText : styles.invalidText}>
              {key.charAt(0).toUpperCase() + key.slice(1)} requirement
            </Text>
          ))}
        </View>

        <View style={[styles.inputContainer, { paddingTop: 10 }]}>
          <Text style={styles.label}>Retype Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="black" />
            <View style={styles.divider}></View>
            <TextInput
              placeholder="********"
              style={styles.input}
              secureTextEntry={!showRetypePassword}
              value={retypePassword} // ✅ Missing value fixed
              onChangeText={setRetypePassword}
            />

            <TouchableOpacity onPress={() => setShowRetypePassword(!showRetypePassword)}>
              <Ionicons name={showRetypePassword ? "eye" : "eye-off"} size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={passwordValid.match ? styles.validText : styles.invalidText}>
          {passwordValid.match ? "Passwords match" : "Passwords do not match"}
        </Text>

        <TouchableOpacity
          style={[styles.signupButton, loading && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.signupButtonText}>{loading ? "Signing up..." : "Sign Up"}</Text>
        </TouchableOpacity>




        <Text style={styles.termsText}>To continue signing up, you have to agree to our Terms of Service and Privacy Policy.</Text>

        <View style={styles.separator}><Text>OR</Text></View>

        <TouchableOpacity style={styles.googleButton}>
          <SvgXml xml={googleSvg} width="25" height="24" />
          <Text style={styles.googleText}>Sign up with Google</Text>
        </TouchableOpacity>


        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/')}> {/* ✅ التنقل للصفحة الرئيسية */}
            <Text style={styles.signupLink}> Sign in</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  formContainer: { width: "80%" },
  logo: { width: 100, height: 40, alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  inputContainer: { marginBottom: 15 },
  label: { color: "#333", marginBottom: 5, fontSize: 14 },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, backgroundColor: "#fff", height: 40 },
  divider: { marginHorizontal: 10, color: "#999" },
  input: { flex: 1, paddingVertical: 8, fontSize: 14, color: "#333" },
  validText: { color: "green", fontSize: 12 },
  invalidText: { color: "red", fontSize: 12 },
  signupButton: { backgroundColor: "#E74C3C", padding: 15, borderRadius: 5, alignItems: "center", marginTop: 10 },
  signupButtonText: { color: "#fff", fontSize: 16 },
  termsText: { textAlign: "center", color: "#777", marginVertical: 10 },
  separator: { alignItems: "center", marginVertical: 15 },
  googleButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 5 },
  googleText: { marginLeft: 5, color: "#555" },


  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  formContainer: { width: "100%", maxWidth: 400 },
  logo: { width: 100, height: 40, alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  googleButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 5, backgroundColor: "#fff", marginTop: 10 },
  googleText: { marginLeft: 5, color: "#555" },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, backgroundColor: "#fff", height: 40 },
  divider: { width: 1, height: "60%", backgroundColor: "#ccc", marginHorizontal: 10 },
  disabledButton: { opacity: 0.5 },



  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  signupText: {
    color: "#777"
  },
  signupLink: {
    color: "#E74C3C",
    fontWeight: "bold"
  },

});
