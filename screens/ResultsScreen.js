import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Mock data for results
const dummyResults = [
  {
    id: '1',
    title: 'SSC CGL 2024 Tier I Result',
    date: '15 Jul, 2025',
    organization: 'Staff Selection Commission',
    pdfUrl: 'https://example.com/results/ssc-cgl-2024.pdf'
  },
  {
    id: '2',
    title: 'UPSC Civil Services 2024 Final Result',
    date: '20 Jul, 2025',
    organization: 'Union Public Service Commission',
    pdfUrl: 'https://example.com/results/upsc-cse-2024.pdf'
  },
  {
    id: '3',
    title: 'IBPS PO 2024 Main Result',
    date: '22 Jul, 2025',
    organization: 'Institute of Banking Personnel Selection',
    pdfUrl: 'https://example.com/results/ibps-po-2024.pdf'
  },
  {
    id: '4',
    title: 'RRB NTPC 2024 CBT-1 Result',
    date: '25 Jul, 2025',
    organization: 'Railway Recruitment Board',
    pdfUrl: 'https://example.com/results/rrb-ntpc-2024.pdf'
  },
  {
    id: '5',
    title: 'NEET UG 2025 Result',
    date: '26 Jul, 2025',
    organization: 'National Testing Agency',
    pdfUrl: 'https://example.com/results/neet-ug-2025.pdf'
  }
];

// Component for displaying a single result item
const ResultCard = ({ result, onDownload }) => {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.resultCard, { backgroundColor: colors.card }]}>
      <View style={styles.resultContent}>
        <Text style={[styles.resultTitle, { color: colors.text }]}>{result.title}</Text>
        <View style={styles.resultMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="business-outline" size={14} color={colors.text} style={styles.metaIcon} />
            <Text style={[styles.metaText, { color: colors.text }]}>{result.organization}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={14} color={colors.text} style={styles.metaIcon} />
            <Text style={[styles.metaText, { color: colors.text }]}>Released: {result.date}</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.downloadButton, { backgroundColor: colors.primary }]}
        onPress={() => onDownload(result)}
      >
        <Ionicons name="download-outline" size={20} color="#fff" />
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

// Results screen that displays exam result announcements
const ResultsScreen = () => {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  
  // Handle refreshing the results list
  const handleRefresh = () => {
    setRefreshing(true);
    // In a real app, we would fetch fresh data here
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  
  // Handle downloading a result PDF
  const handleDownload = (result) => {
    // In a real app, this would download the PDF or open it in browser
    Alert.alert(
      'Download Result',
      `Do you want to download ${result.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Download',
          onPress: () => {
            Linking.openURL(result.pdfUrl).catch(err => {
              Alert.alert('Error', 'Could not open the PDF. Please try again later.');
              console.error('Error opening URL:', err);
            });
          }
        }
      ]
    );
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={dummyResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultCard 
            result={item} 
            onDownload={handleDownload} 
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="document-text" size={64} color={colors.primary} />
            <Text style={[styles.emptyText, { color: colors.text }]}>
              No results available at the moment
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  separator: {
    height: 12,
  },
  resultCard: {
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  resultContent: {
    marginBottom: 12,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultMeta: {
    marginTop: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  metaIcon: {
    marginRight: 6,
  },
  metaText: {
    fontSize: 14,
    opacity: 0.8,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
  },
  downloadText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
});

ResultCard.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
  }).isRequired,
  onDownload: PropTypes.func.isRequired,
};

export default ResultsScreen;