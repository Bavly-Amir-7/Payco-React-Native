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
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // Handle safe areas
import { BlurView } from 'expo-blur'; // Import BlurView
import icedCoffeeImg from "../assets/images/iced-coffee.png";

const { height, width } = Dimensions.get('window'); // Get device dimensions
const isTablet = width > 768; // Define tablet breakpoint

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate('signup');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={icedCoffeeImg}
        style={[styles.image, isTablet && styles.tabletImage]} // Apply tablet-specific styles
        resizeMode="cover"
      >
        {/* Blur Overlay */}
        <BlurView intensity={50} style={styles.blurOverlay}>
          {/* Title */}
          <Text style={styles.title}>Sign in</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ccc"
              style={styles.input}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry={!passwordVisible}
              style={styles.input}
            />
            <Pressable
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="#ccc"
              />
            </Pressable>
          </View>

          {/* Login Button */}
          <Pressable style={[styles.button, styles.loginButton]}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>

          {/* Social Buttons */}
          <Pressable style={[styles.button, styles.googleButton]}>
            <Ionicons name="logo-google" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Login with Google</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.facebookButton]}>
            <Ionicons name="logo-facebook" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Login with Facebook</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.phoneButton]}>
            <Ionicons name="call" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Login with Phone</Text>
          </Pressable>

          {/* Links */}
          <Text style={styles.link}>Forgot Password?</Text>
          <Text style={styles.link}>
            Don't have an account?{" "}
            <Text style={styles.signUpLink} onPress={navigateToSignUp}>
              Sign Up
            </Text>
          </Text>
        </BlurView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000', // Ensure background color for safe areas
  },
  image: {
    flex: 1,
    width: '100%',
    height: height, // Ensure background covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabletImage: {
    height: height + 100, // Extend background height for tablets
  },
  blurOverlay: {
    flex: 1, // Ensure blur covers the entire screen
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  inputContainer: {
    width: '90%', // Relative width for responsiveness
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(113, 51, 51, 0.8)', // Slightly darker background for clarity
    borderRadius: 25,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  button: {
    width: '70%', // Relative width for responsiveness
    borderRadius: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#6C63FF',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  phoneButton: {
    backgroundColor: '#0F9D58',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  signUpLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
