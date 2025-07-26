import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import JobsScreen from '../screens/JobsScreen';
import ResultsScreen from '../screens/ResultsScreen';
import AdmitCardScreen from '../screens/AdmitCardScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Job stack navigator that includes job list and job details screens
const JobStack = () => {
  const { colors } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="JobsList" 
        component={JobsScreen} 
        options={{ title: 'Latest Jobs' }} 
      />
      <Stack.Screen 
        name="JobDetails" 
        component={JobDetailsScreen} 
        options={({ route }) => ({ title: route.params?.title || 'Job Details' })} 
      />
    </Stack.Navigator>
  );
};

// Main app navigator with bottom tabs
const AppNavigator = () => {
  const { colors } = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.card,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Results') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'AdmitCards') {
            iconName = focused ? 'card' : 'card-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen 
        name="Jobs" 
        component={JobStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="AdmitCards" component={AdmitCardScreen} options={{ title: 'Admit Cards' }} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
