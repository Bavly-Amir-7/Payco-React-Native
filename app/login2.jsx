import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Animated, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native'; // For navigation
import icedCoffeeImg from "../assets/images/iced-coffee.png"; // Your background image

export default function LoginScreen2() {
 
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={icedCoffeeImg} resizeMode="cover" style={styles.imageBackground}>
        <View>

         
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
