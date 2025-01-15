import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Animated, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native'; // For navigation
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

export default function LoginScreen() {
  const navigation = useNavigation(); // For navigation
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginBtnScale, setLoginBtnScale] = useState(new Animated.Value(1));

  const handleLoginPressIn = () => {
    Animated.spring(loginBtnScale, {
      toValue: 1.1,
      friction: 3,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  const handleLoginPressOut = () => {
    Animated.spring(loginBtnScale, {
      toValue: 1,
      friction: 3,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    if (email && password) {
      // Handle login logic
      console.log('Logged in successfully');
    } else {
      alert('Please fill in both fields!');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logged in with Google');
  };

  const handleFacebookLogin = () => {
    console.log('Logged in with Facebook');
  };

  const handlePhoneLogin = () => {
    console.log('Logged in with Phone');
  };

  const navigateToSignUp = () => {
    navigation.navigate('signup'); // Navigate to SignUp page
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={setEmail}
            textAlign="right" // Arabic text alignment
            writingDirection="rtl" // Ensure proper alignment for Arabic text
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#7F7F7F"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              textAlign="right" // Arabic text alignment
              writingDirection="rtl" // Ensure proper alignment for Arabic text
            />
            <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#7F7F7F"
              />
            </Pressable>
          </View>

          {/* Login Button */}
          <Animated.View
            style={[styles.loginButton, { transform: [{ scale: loginBtnScale }] }] }
            onTouchStart={handleLoginPressIn}
            onTouchEnd={handleLoginPressOut}
          >
            <Pressable onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </Animated.View>

          {/* Google Login Button (Red) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#DB4437' }]} onPress={handleGoogleLogin}>
            <Ionicons name="logo-google" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Login with Google</Text>
          </Pressable>

          {/* Facebook Login Button (Blue) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={handleFacebookLogin}>
            <Ionicons name="logo-facebook" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </Pressable>

          {/* Phone Login Button (Green) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#4CAF50' }]} onPress={handlePhoneLogin}>
            <Ionicons name="call-outline" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Login with Phone</Text>
          </Pressable>

          {/* Forgot Password */}
          <Pressable style={styles.forgotPassword} onPress={() => alert('Redirect to Forgot Password page')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>

          {/* Redirect to Sign Up */}
          <Pressable style={styles.signupRedirect} onPress={navigateToSignUp}>
            <Text style={styles.signupRedirectText}>Don't have an account? Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    height: '100%', // Ensure full screen coverage
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  loginButton: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4B2E83',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',  // Ensuring equal width for all buttons
    alignSelf: 'center',  // Center the buttons horizontally
    justifyContent: 'center',  // Center the text and icon inside the button
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  signupRedirect: {
    marginTop: 15,
  },
  signupRedirectText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
