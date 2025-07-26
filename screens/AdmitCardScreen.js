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

// Mock data for admit cards
const dummyAdmitCards = [
  {
    id: '1',
    title: 'SSC CGL 2025 Tier I Admit Card',
    examDate: '10 Aug, 2025',
    organization: 'Staff Selection Commission',
    region: 'Central Region',
    pdfUrl: 'https://example.com/admitcards/ssc-cgl-2025.pdf'
  },
  {
    id: '2',
    title: 'UPSC Civil Services 2025 Prelims Admit Card',
    examDate: '15 Aug, 2025',
    organization: 'Union Public Service Commission',
    region: 'All India',
    pdfUrl: 'https://example.com/admitcards/upsc-cse-2025.pdf'
  },
  {
    id: '3',
    title: 'IBPS PO 2025 Prelims Admit Card',
    examDate: '20 Aug, 2025',
    organization: 'Institute of Banking Personnel Selection',
    region: 'All India',
    pdfUrl: 'https://example.com/admitcards/ibps-po-2025.pdf'
  },
  {
    id: '4',
    title: 'RRB NTPC 2025 CBT-1 Admit Card',
    examDate: '25 Aug, 2025',
    organization: 'Railway Recruitment Board',
    region: 'Northern Region',
    pdfUrl: 'https://example.com/admitcards/rrb-ntpc-2025.pdf'
  },
  {
    id: '5',
    title: 'NDA & NA (II) 2025 Admit Card',
    examDate: '01 Sep, 2025',
    organization: 'Union Public Service Commission',
    region: 'All India',
    pdfUrl: 'https://example.com/admitcards/nda-na-2025.pdf'
  }
];

// Component for displaying a single admit card
const AdmitCardItem = ({ admitCard, onDownload }) => {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.cardContainer, { backgroundColor: colors.card }]}>
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>{admitCard.title}</Text>
        <View style={styles.cardMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="business-outline" size={14} color={colors.text} style={styles.metaIcon} />
            <Text style={[styles.metaText, { color: colors.text }]}>{admitCard.organization}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={14} color={colors.text} style={styles.metaIcon} />
            <Text style={[styles.metaText, { color: colors.text }]}>Exam Date: {admitCard.examDate}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color={colors.text} style={styles.metaIcon} />
            <Text style={[styles.metaText, { color: colors.text }]}>Region: {admitCard.region}</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.downloadButton, { backgroundColor: colors.primary }]}
        onPress={() => onDownload(admitCard)}
      >
        <Ionicons name="download-outline" size={20} color="#fff" />
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

// Admit card screen that displays downloadable admit cards
const AdmitCardScreen = () => {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  
  // Handle refreshing the admit card list
  const handleRefresh = () => {
    setRefreshing(true);
    // In a real app, we would fetch fresh data here
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  
  // Handle downloading an admit card
  const handleDownload = (admitCard) => {
    // In a real app, this would download the PDF or open it in browser
    Alert.alert(
      'Download Admit Card',
      `Do you want to download ${admitCard.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Download',
          onPress: () => {
            Linking.openURL(admitCard.pdfUrl).catch(err => {
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
        data={dummyAdmitCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AdmitCardItem 
            admitCard={item} 
            onDownload={handleDownload} 
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="card" size={64} color={colors.primary} />
            <Text style={[styles.emptyText, { color: colors.text }]}>
              No admit cards available at the moment
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
  cardContainer: {
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardContent: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardMeta: {
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

AdmitCardItem.propTypes = {
  admitCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    examDate: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
  }).isRequired,
  onDownload: PropTypes.func.isRequired,
};

export default AdmitCardScreen;