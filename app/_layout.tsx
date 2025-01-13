import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      {/* شاشة التابات مع إخفاء الهيدر */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* الشاشة الرئيسية */}
      {/* <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      /> */}

      {/* شاشة الاتصال */}
      {/* <Stack.Screen
        name="contact"
        options={{ title: "Contact Us" }}
      /> */}

      {/* صفحة الخطأ */}
      <Stack.Screen
        name="+not-found"
        options={{ title: "404 Not Found" }}
      />
    </Stack>
  </ThemeProvider>
  );

}
