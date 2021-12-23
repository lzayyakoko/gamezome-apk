import React from 'react';
import HomeStack from './routes/HomeStack';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Thin": require('./assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <HomeStack/>
  );
}