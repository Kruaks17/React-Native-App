import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Main from './components/Main';
import Input from './components/input';

export default function App() {
  let [fontsLoaded] = useFonts({
    'RadioGrotesk-Bold': require('./assets/fonts/RadioGrotesk-Bold.otf'),
    'RadioGrotesk-Regular': require('./assets/fonts/RadioGrotesk-Regular.otf'),
    'Telegraf-Bold': require('./assets/fonts/Telegraf-Bold.otf'),
    'Telegraf-Regular': require('./assets/fonts/Telegraf-Regular.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Main>
      </Main>
    );
  }
};
