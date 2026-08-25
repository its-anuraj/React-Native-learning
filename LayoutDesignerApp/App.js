import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import CardLayout from './components/CardLayout';
import GridLayout from './components/GridLayout';
import DashboardLayout from './components/DashboardLayout';
import ResponsiveBox from './components/ResponsiveBox';
import PlatformShadowBox from './components/PlatformShadowBox';




export default function App() {
  
  return(
      <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" hidden={false} />
      <View style={styles.header}>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>DAY 5</Text>
          </View>
          <Text style={styles.platformText}>
            {Platform.OS === 'ios' ? '🍏 iOS' : '🤖 Android'}
          </Text>
        </View>
        <Text style={styles.title}>Layout Designer</Text>
        <Text style={styles.subtitle}>Mastering Flexbox, Dimensions & Platform Styles</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <CardLayout />
        <GridLayout />
        <DashboardLayout />
        <ResponsiveBox />
        <PlatformShadowBox />


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
   header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 35 : 12,
    paddingBottom: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
   badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  
  badgeText: {
    color: 'red',
    fontSize: 15,
    fontWeight: '800',
  },
  platformText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
   title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
    scrollView: {
    flex: 1,
  },
  
  
   scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 40,
    gap: 16,
  },
})