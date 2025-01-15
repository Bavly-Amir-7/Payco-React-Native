import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Animated, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native'; // For navigation
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

export default function SignUpScreen() {
  const navigation = useNavigation(); // For navigation
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchStatus, setPasswordMatchStatus] = useState('');
  const [passwordMatchColor, setPasswordMatchColor] = useState('');
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

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSignUp = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        setPasswordMatchStatus('Passwords match');
        setPasswordMatchColor('green');
      } else {
        setPasswordMatchStatus('Passwords do not match');
        setPasswordMatchColor('red');
      }
    } else {
      setPasswordMatchStatus(''); // Clear message if fields are empty
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleFacebookSignUp = () => {
    console.log('Sign up with Facebook');
  };

  const handlePhoneSignUp = () => {
    console.log('Sign up with Phone');
  };

  // Navigate to Login Screen
  const navigateToLogin = () => {
    navigation.navigate('login'); // This will navigate to the Login screen
  };

  // Watch for input changes to hide message when fields are empty
  const handlePasswordChange = (text) => {
    setPassword(text);
    if (!text || !confirmPassword) {
      setPasswordMatchStatus(''); // Clear message when password or confirm password is empty
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (!text || !password) {
      setPasswordMatchStatus(''); // Clear message when password or confirm password is empty
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={setEmail}
            textAlign="right"
            writingDirection="rtl"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#7F7F7F"
              value={password}
              onChangeText={handlePasswordChange} // Updated this to call the handler
              secureTextEntry={!isPasswordVisible}
              textAlign="right"
              writingDirection="rtl"
            />
            <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#7F7F7F"
              />
            </Pressable>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#7F7F7F"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange} // Updated this to call the handler
              secureTextEntry={!isConfirmPasswordVisible}
              textAlign="right"
              writingDirection="rtl"
            />
            <Pressable onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
              <Ionicons
                name={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#7F7F7F"
              />
            </Pressable>
          </View>

          {/* Show password mismatch message */}
          {passwordMatchStatus && (
            <Text style={[styles.passwordMatchMessage, { color: passwordMatchColor, backgroundColor: 'white' }]}>
              {passwordMatchStatus}
            </Text>
          )}

          {/* Sign Up Button */}
          <Animated.View
            style={[styles.signUpButton, { transform: [{ scale: loginBtnScale }] }] }
            onTouchStart={handleLoginPressIn}
            onTouchEnd={handleLoginPressOut}
          >
            <Pressable onPress={handleSignUp} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </Animated.View>

          {/* Google Sign Up Button (Red) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#DB4437' }]} onPress={handleGoogleSignUp}>
            <Ionicons name="logo-google" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Sign Up with Google</Text>
          </Pressable>

          {/* Facebook Sign Up Button (Blue) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={handleFacebookSignUp}>
            <Ionicons name="logo-facebook" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
          </Pressable>

          {/* Phone Sign Up Button (Green) */}
          <Pressable style={[styles.socialButton, { backgroundColor: '#4CAF50' }]} onPress={handlePhoneSignUp}>
            <Ionicons name="call-outline" size={24} color="#fff" />
            <Text style={styles.socialButtonText}>Sign Up with Phone</Text>
          </Pressable>

          {/* Already have an account? */}
          <Pressable style={styles.forgotPassword} onPress={navigateToLogin}>
            <Text style={styles.forgotPasswordText}>Already have an account? Login</Text>
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
  signUpButton: {
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
  passwordMatchMessage: {
    fontSize: 14,
    marginBottom: 15,
    padding: 5,
    borderRadius: 10,
  },
});
