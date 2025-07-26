import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Component for displaying a job listing card
const JobCard = ({ job, onPress }) => {
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[styles.cardContainer, { backgroundColor: colors.card }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <Text style={[styles.title, { color: colors.text }]}>{job.title}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Ionicons name="business-outline" size={16} color={colors.text} style={styles.icon} />
            <Text style={[styles.detailText, { color: colors.text }]}>{job.organization}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Ionicons name="document-text-outline" size={16} color={colors.text} style={styles.icon} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              Posts: <Text style={{ fontWeight: '500' }}>{job.totalPosts}</Text>
            </Text>
          </View>
          
          <View style={styles.detailRow}>
            <Ionicons name="calendar-outline" size={16} color={colors.text} style={styles.icon} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              Last Date: <Text style={{ fontWeight: '500' }}>{job.lastDate}</Text>
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <View style={[styles.viewButton, { backgroundColor: colors.primary }]}>
          <Text style={styles.viewButtonText}>View Details</Text>
          <Ionicons name="chevron-forward" size={16} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 4,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    padding: 12,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: '500',
    marginRight: 4,
  },
});

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    totalPosts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lastDate: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default JobCard;