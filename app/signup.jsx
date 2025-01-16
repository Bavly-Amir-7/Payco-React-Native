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
import icedCoffeeImg from "../assets/images/iced-coffee.png";

const { height, width } = Dimensions.get('window'); // Get device dimensions
const isTablet = width > 768; // Define tablet breakpoint

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const matchStatus =
    password && confirmPassword
      ? password === confirmPassword
        ? 'Passwords match'
        : 'Passwords do not match'
      : '';

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={icedCoffeeImg}
        style={[styles.image, isTablet && styles.tabletImage]} // Adjust for tablet
        resizeMode="cover"
      >
        {/* Title */}
        <Text style={styles.title}>Sign Up</Text>

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
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#ccc"
            />
          </Pressable>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            secureTextEntry={!confirmPasswordVisible}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.eyeIcon}
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
              matchStatus === 'Passwords match'
                ? styles.matchSuccessBackground
                : styles.matchErrorBackground,
            ]}
          >
            <Text style={styles.matchStatusText}>{matchStatus}</Text>
          </View>
        )}

        {/* Sign Up Button */}
        <Pressable style={[styles.button, styles.signUpButton]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        {/* Social Buttons */}
        <Pressable style={[styles.button, styles.googleButton]}>
          <Ionicons name="logo-google" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Google</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.facebookButton]}>
          <Ionicons name="logo-facebook" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Facebook</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.phoneButton]}>
          <Ionicons name="call" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Phone</Text>
        </Pressable>

        {/* Links */}
        <Text style={styles.link}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={navigateToLogin}>
            Login
          </Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000', // Ensure background color for safe areas
  },
  image: {
    flex: 1,
    width: '100%',
    height: height, // Cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabletImage: {
    height: height + 100, // Extend height for tablets
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
    width: '90%', // Keep input responsive
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(113, 51, 51, 0.8)',
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
  matchStatusContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
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
  button: {
    width: '70%',
    borderRadius: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signUpButton: {
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
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
