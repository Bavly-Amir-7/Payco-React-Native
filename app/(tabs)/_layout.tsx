import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { Platform, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  // Animation for bounce effect
  const bounceAnim = useRef(new Animated.Value(1)).current;

  // Functions to handle button press animation
  const handlePressIn = () => {
    Animated.spring(bounceAnim, {
      toValue: 0.9,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(190, 69, 19)', // بني للأيقونات النشطة (Active)
        tabBarInactiveTintColor: '#D2B48C', // بيج للأيقونات غير النشطة (Inactive)
        tabBarStyle: {
          backgroundColor: '#3E2723', // بني غامق للخلفية
          borderTopWidth: 0,
          height: 65,
        },
        headerShown: false,
        tabBarButton: ({ children, onPress }) => (
          <Animated.View
            style={{
              transform: [{ scale: bounceAnim }],
            }}
          >
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
              }}
            >
              {children}
            </TouchableOpacity>
          </Animated.View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="people-circle-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
