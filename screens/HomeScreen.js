import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Constants from 'expo-constants';

import InfoTile from '@components/InfoTile';
import LinkButton from '@components/LinkButton';
import { colors } from '@theme/colors';

// Home screen component that serves as the landing page of the app
const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Banner */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x150/003366/FFFFFF?text=Sarkari+Result' }}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>
      
      {/* Main Content Section */}
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to Sarkari Results
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Latest Government Jobs, Results & Admit Cards
        </Text>
        
        {/* Quick Links Section */}
        <View style={styles.quickLinksContainer}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Links</Text>
          <View style={styles.linksGrid}>
            <InfoTile 
              title="Latest Jobs"
              count="124"
              icon="briefcase"
              onPress={() => navigation.navigate('Jobs')}
            />
            <InfoTile 
              title="Recent Results"
              count="78"
              icon="newspaper"
              onPress={() => navigation.navigate('Results')}
            />
            <InfoTile 
              title="Admit Cards"
              count="56"
              icon="card"
              onPress={() => navigation.navigate('AdmitCards')}
            />
            <InfoTile 
              title="Syllabus"
              count="45"
              icon="library"
              onPress={() => {}}
            />
          </View>
        </View>
        
        {/* Trending Jobs Section */}
        <View style={styles.trendingContainer}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Trending Jobs</Text>
          <View style={styles.trendingList}>
            <LinkButton 
              title="UPSC Civil Services 2025"
              subtitle="Last Date: 15 Aug, 2025"
              onPress={() => navigation.navigate('Jobs', { screen: 'JobDetails', params: { id: 1 } })}
            />
            <LinkButton 
              title="SSC CGL 2025"
              subtitle="Last Date: 30 Jul, 2025"
              onPress={() => navigation.navigate('Jobs', { screen: 'JobDetails', params: { id: 2 } })}
            />
            <LinkButton 
              title="Indian Railways Recruitment 2025"
              subtitle="Last Date: 22 Aug, 2025"
              onPress={() => navigation.navigate('Jobs', { screen: 'JobDetails', params: { id: 3 } })}
            />
          </View>
        </View>
        
        {/* Ad Banner */}
        <View style={styles.adContainer}>
          <Text style={[styles.adText, { color: isDark ? '#FFF' : '#000' }]}>Advertisement</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/350x200/E5E5E5/333333?text=Ad+Banner' }}
            style={styles.adBanner}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
  },
  banner: {
    width: '100%',
    height: 150,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
    opacity: 0.8,
  },
  quickLinksContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  linksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trendingContainer: {
    marginVertical: 16,
  },
  trendingList: {
    marginTop: 8,
  },
  adContainer: {
    marginVertical: 16,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  adText: {
    fontSize: 12,
    marginBottom: 8,
    opacity: 0.6,
  },
  adBanner: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  }
});

export default HomeScreen;