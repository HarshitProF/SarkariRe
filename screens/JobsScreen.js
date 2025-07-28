import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

import JobCard from '@components/JobCard';
import { useJobs } from '@context/JobContext';

// Jobs screen that displays a list of available job postings
const JobsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { jobs, loading, fetchJobs } = useJobs();
  const [refreshing, setRefreshing] = useState(false);
  
  // Fetch jobs when component mounts
  useEffect(() => {
    fetchJobs();
  }, []);
  
  // Handler for pull-to-refresh functionality
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchJobs();
    setRefreshing(false);
  };
  
  // Navigate to job details screen when a job is selected
  const handleJobPress = (job) => {
    navigation.navigate('JobDetails', { 
      id: job.id,
      title: job.title
    });
  };
  
  // Render a single job card item
  const renderJobItem = ({ item }) => (
    <JobCard 
      job={item} 
      onPress={() => handleJobPress(item)}
    />
  );
  
  // Render a banner ad after every 5 job listings
  const renderBannerAd = (index) => {
    if ((index + 1) % 5 === 0) {
      return (
        <View style={[styles.adBanner, { backgroundColor: colors.card }]}>
          <View style={styles.adContent}>
            {/* Ad component would go here in a real implementation */}
            <View style={[styles.adPlaceholder, { borderColor: colors.border }]}>
              <View style={[styles.adLabel, { backgroundColor: colors.primary }]}>
                <Text style={styles.adLabelText}>Advertisement</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };
  
  // If jobs are still loading, display a loading indicator
  if (loading && !refreshing) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
  },
  separator: {
    height: 16,
  },
  footer: {
    height: 20,
  },
  adBanner: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  adContent: {
    alignItems: 'center',
  },
  adPlaceholder: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  adLabel: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  adLabelText: {
    color: 'white',
    fontSize: 12,
  },
});

JobsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default JobsScreen;