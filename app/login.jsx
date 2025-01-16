import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Ionicons } from '@expo/vector-icons';
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation(); // Access navigation object

  // Function to navigate to the SignUp page
  const navigateToSignUp = () => {
    navigation.navigate('signup'); // Navigate to the 'SignUp' screen
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>

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
          <Text style={styles.buttonText}>Login</Text>
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
      </ImageBackground>
    </View>
  );
};

export default Login;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
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
    width: '100%',
    marginBottom: 15,
    position: 'relative',
    alignItems: "center"

  },
  input: {
    width: '90%',
    backgroundColor: 'rgba(113, 51, 51, 0.73)', // خلفية شفافة قليلاً
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1, // حدود واضحة
    borderColor: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 30,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  button: {
    width: '70%',
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
