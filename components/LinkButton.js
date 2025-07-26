import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Component for displaying a link button with title and subtitle
const LinkButton = ({ title, subtitle, onPress }) => {
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: colors.card }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: colors.text }]} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
      
      <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    padding: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    opacity: 0.7,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

LinkButton.defaultProps = {
  subtitle: null,
};

export default LinkButton;