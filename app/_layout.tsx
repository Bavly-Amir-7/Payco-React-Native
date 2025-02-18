import { LanguageProvider } from './LanguageContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false, title: 'Log' }} />
        <Stack.Screen name="payment" options={{ title: 'Payment' }} /> 
        <Stack.Screen name="insertAmount" options={{ title: 'InsertAmount' }} /> 
        <Stack.Screen name="home" options={{ title: 'Home' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
        <Stack.Screen name="order" options={{ title: 'Order' }} />
        <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      </Stack>
    </LanguageProvider>
  );
}
