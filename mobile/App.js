import React, { useState, useEffect } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import * as Font from 'expo-font';

import Routes from './src/routes'

export default function App() {
  const [fontLoaded, setFont] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'CarterOne-Regular': require('./assets/fonts/CarterOne-Regular.ttf'),
      });

      setFont(true);
    }

    loadFonts();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3FD59A" />
      {fontLoaded ? (
        <Routes></Routes>
      ) :
        null}
    </>
  );
}