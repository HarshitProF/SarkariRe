// Color themes for light and dark mode

// Base colors
export const colors = {
  darkBlue: '#003366',
  saffron: '#FF9933',
  cream: '#FFF8E1',
  darkGrey: '#333333',
  lightGrey: '#E5E5E5',
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF3B30',
  success: '#34C759',
  warning: '#FFCC00',
};

// Light theme
export const lightTheme = {
  dark: false,
  colors: {
    primary: colors.darkBlue,
    background: colors.cream,
    card: colors.white,
    text: colors.darkGrey,
    border: colors.lightGrey,
    notification: colors.error,
    accent: colors.saffron,
    highlight: colors.saffron + '20', // 20% opacity
  },
};

// Dark theme
export const darkTheme = {
  dark: true,
  colors: {
    primary: colors.saffron,
    background: '#121212', // Dark background
    card: '#1E1E1E',      // Slightly lighter than background
    text: '#F0F0F0',      // Light text
    border: '#2C2C2C',    // Dark borders
    notification: colors.error,
    accent: colors.darkBlue,
    highlight: colors.saffron + '20', // 20% opacity
  },
};