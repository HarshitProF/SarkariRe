import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator, 
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { useJobs } from '@context/JobContext';

// Job details screen that displays complete information about a job
const JobDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { colors } = useTheme();
  const { getJobById } = useJobs();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch job details when component mounts
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobData = await getJobById(id);
        setJob(jobData);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobDetails();
  }, [id]);
  
  // Handler for opening external links
  const handleOpenLink = (url) => {
    Linking.openURL(url).catch(err => {
      console.error('Error opening URL:', err);
      alert('Could not open the link. Please try again later.');
    });
  };
  
  // Display loading indicator while fetching job details
  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  
  // If job data couldn't be loaded
  if (!job) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: colors.background }]}>
        <Ionicons name="alert-circle" size={64} color={colors.notification} />
        <Text style={[styles.errorText, { color: colors.text }]}>
          Could not load job details
        </Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Job Header */}
      <View style={[styles.headerCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.jobTitle, { color: colors.text }]}>{job.title}</Text>
        <View style={styles.organizationRow}>
          <Ionicons name="business" size={16} color={colors.text} />
          <Text style={[styles.organizationText, { color: colors.text }]}>
            {job.organization}
          </Text>
        </View>
      </View>
      
      {/* Important Dates */}
      <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Important Dates</Text>
        <View style={styles.datesContainer}>
          <View style={styles.dateItem}>
            <Text style={[styles.dateLabel, { color: colors.text }]}>Start Date:</Text>
            <Text style={[styles.dateValue, { color: colors.text }]}>{job.startDate}</Text>
          </View>
          <View style={styles.dateItem}>
            <Text style={[styles.dateLabel, { color: colors.text }]}>Last Date:</Text>
            <Text style={[styles.dateValue, { color: colors.text, fontWeight: 'bold' }]}>{job.lastDate}</Text>
          </View>
          {job.examDate && (
            <View style={styles.dateItem}>
              <Text style={[styles.dateLabel, { color: colors.text }]}>Exam Date:</Text>
              <Text style={[styles.dateValue, { color: colors.text }]}>{job.examDate}</Text>
            </View>
          )}
        </View>
      </View>
      
      {/* Vacancy Details */}
      <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Vacancy Details</Text>
        <Text style={[styles.vacancyTotal, { color: colors.text }]}>
          Total Posts: <Text style={{ fontWeight: 'bold' }}>{job.totalPosts}</Text>
        </Text>
        
        <View style={styles.postsTable}>
          <View style={[styles.tableHeader, { backgroundColor: colors.primary }]}>
            <Text style={[styles.tableHeaderText, { flex: 2 }]}>Post</Text>
            <Text style={styles.tableHeaderText}>Vacancies</Text>
          </View>
          
          {job.posts.map((post, index) => (
            <View 
              key={index} 
              style={[
                styles.tableRow, 
                { backgroundColor: index % 2 === 0 ? colors.background : colors.card }
              ]}
            >
              <Text style={[styles.postName, { color: colors.text, flex: 2 }]}>{post.name}</Text>
              <Text style={[styles.postCount, { color: colors.text }]}>{post.count}</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* Advertisement */}
      <View style={[styles.adContainer, { backgroundColor: colors.card }]}>
        <Text style={styles.adLabel}>Advertisement</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/350x100/E5E5E5/333333?text=Advertisement' }}
          style={styles.adBanner}
          resizeMode="cover"
        />
      </View>
      
      {/* Eligibility */}
      <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Eligibility</Text>
        <View style={styles.eligibilityContainer}>
          <View style={styles.eligibilityItem}>
            <Text style={[styles.eligibilityLabel, { color: colors.text }]}>Age Limit:</Text>
            <Text style={[styles.eligibilityValue, { color: colors.text }]}>{job.eligibility.ageLimit}</Text>
          </View>
          <View style={styles.eligibilityItem}>
            <Text style={[styles.eligibilityLabel, { color: colors.text }]}>Education:</Text>
            <Text style={[styles.eligibilityValue, { color: colors.text }]}>{job.eligibility.education}</Text>
          </View>
        </View>
        
        {job.eligibility.additionalRequirements && (
          <View style={styles.additionalRequirements}>
            <Text style={[styles.additionalRequirementsTitle, { color: colors.text }]}>
              Additional Requirements:
            </Text>
            {job.eligibility.additionalRequirements.map((req, index) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={[styles.bulletDot, { color: colors.text }]}>•</Text>
                <Text style={[styles.bulletText, { color: colors.text }]}>{req}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      
      {/* Application Fee */}
      <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Application Fee</Text>
        <View style={styles.feeContainer}>
          {job.fees.map((fee, index) => (
            <View key={index} style={styles.feeItem}>
              <Text style={[styles.feeCategory, { color: colors.text }]}>{fee.category}:</Text>
              <Text style={[styles.feeAmount, { color: colors.text }]}>₹{fee.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* Important Links */}
      <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Important Links</Text>
        <View style={styles.linksContainer}>
          {job.links.map((link, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.linkButton, { backgroundColor: colors.primary }]}
              onPress={() => handleOpenLink(link.url)}
            >
              <Text style={styles.linkButtonText}>{link.title}</Text>
              <Ionicons name="open-outline" size={16} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      {/* Important Instructions */}
      {job.instructions && job.instructions.length > 0 && (
        <View style={[styles.sectionCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.primary }]}>Important Instructions</Text>
          {job.instructions.map((instruction, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={[styles.bulletDot, { color: colors.text }]}>•</Text>
              <Text style={[styles.bulletText, { color: colors.text }]}>{instruction}</Text>
            </View>
          ))}
        </View>
      )}
      
      {/* Last updated */}
      <View style={styles.lastUpdatedContainer}>
        <Text style={[styles.lastUpdatedText, { color: colors.text }]}>
          Last Updated: {job.lastUpdated}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  headerCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  organizationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationText: {
    marginLeft: 8,
    fontSize: 16,
    opacity: 0.8,
  },
  sectionCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  datesContainer: {
    marginTop: 8,
  },
  dateItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dateLabel: {
    width: 90,
    fontWeight: '500',
  },
  dateValue: {
    flex: 1,
  },
  vacancyTotal: {
    fontSize: 16,
    marginBottom: 12,
  },
  postsTable: {
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 10,
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  postName: {
    flex: 1,
  },
  postCount: {
    flex: 1,
    textAlign: 'center',
  },
  adContainer: {
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  adLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  adBanner: {
    width: '100%',
    height: 100,
    borderRadius: 4,
  },
  eligibilityContainer: {
    marginTop: 8,
  },
  eligibilityItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  eligibilityLabel: {
    width: 100,
    fontWeight: '500',
  },
  eligibilityValue: {
    flex: 1,
  },
  additionalRequirements: {
    marginTop: 12,
  },
  additionalRequirementsTitle: {
    fontWeight: '500',
    marginBottom: 8,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bulletDot: {
    width: 20,
    fontSize: 16,
  },
  bulletText: {
    flex: 1,
  },
  feeContainer: {
    marginTop: 8,
  },
  feeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 4,
  },
  feeCategory: {
    flex: 1,
  },
  feeAmount: {
    fontWeight: '500',
  },
  linksContainer: {
    marginTop: 8,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  linkButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  lastUpdatedContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  lastUpdatedText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

JobDetailsScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default JobDetailsScreen;