import React, { useState } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import * as Font from 'expo-font';

import Routes from './src/routes'

export default function App() {
  const [fontLoaded, setFont] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'CarterOne-Regular': require('./assets/fonts/CarterOne-Regular.ttf'),
    });

    setFont(true);
  }

  loadFonts();

  console.log();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4b7e96" />
      {fontLoaded ? (
        <Routes></Routes>
      ) :
        null}
    </>
  );
}