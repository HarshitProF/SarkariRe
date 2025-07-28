import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

import AppNavigator from '@app/navigation/AppNavigator';
import { JobProvider } from '@context/JobContext';
import { darkTheme, lightTheme } from '@theme/colors';

// Root app component that wraps the entire application with providers
export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <JobProvider>
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </JobProvider>
    </SafeAreaProvider>
  );
}
