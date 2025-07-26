import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Component for displaying an information tile with icon, title and count
const InfoTile = ({ title, count, icon, onPress }) => {
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity
      style={[styles.tileContainer, { backgroundColor: colors.card }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.primary + '20' }]}>
        <Ionicons name={icon} size={24} color={colors.primary} />
      </View>
      
      <Text style={[styles.count, { color: colors.text }]}>{count}</Text>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 12,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
});

InfoTile.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default InfoTile;