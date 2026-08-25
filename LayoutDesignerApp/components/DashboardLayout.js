import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>3. Dashboard Layout (Panels + Bottom Bar)</Text>

      <View style={styles.dashboardCard}>
        <View style={styles.dashHeader}>
          <View>
            <Text style={styles.greeting}>Overview</Text>
            <Text style={styles.dashSub}>Monthly Performance</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Live Sync</Text>
          </View>
        </View>

        <View style={styles.panelsRow}>
          <View style={[styles.panel, styles.leftPanel]}>
            <Text style={styles.panelLabel}>Total Sales</Text>
            <Text style={styles.panelValue}>$32,450</Text>
            <Text style={styles.panelGrowth}>+18.4% this month</Text>
          </View>

          <View style={[styles.panel, styles.rightPanel]}>
            <Text style={styles.panelLabel}>Conversion</Text>
            <Text style={styles.panelValue}>4.82%</Text>
            <Text style={styles.panelGrowth}>+2.1% this month</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Quarterly Target</Text>
            <Text style={styles.progressPercent}>78%</Text>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        <View style={styles.bottomBar}>
          {[
            { name: 'Home', icon: '🏠' },
            { name: 'Stats', icon: '📈' },
            { name: 'Wallet', icon: '💳' },
            { name: 'Profile', icon: '👤' },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.name)}
              activeOpacity={0.7}
            >
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text style={[styles.tabLabel, activeTab === tab.name && styles.tabLabelActive]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  dashboardCard: {
    backgroundColor: '#0f172a',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  dashHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '800',
    color: '#f8fafc',
  },
  dashSub: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#1e293b',
    borderColor: '#22c55e',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#22c55e',
    fontSize: 11,
    fontWeight: '700',
  },
  panelsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  panel: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
  },
  leftPanel: {
    backgroundColor: '#1e293b',
    borderLeftWidth: 4,
    borderLeftColor: '#6366f1',
  },
  rightPanel: {
    backgroundColor: '#1e293b',
    borderLeftWidth: 4,
    borderLeftColor: '#ec4899',
  },
  panelLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
  },
  panelValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginVertical: 4,
  },
  panelGrowth: {
    fontSize: 11,
    color: '#34d399',
    fontWeight: '600',
  },
  progressContainer: {
    backgroundColor: '#1e293b',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 12,
    color: '#38bdf8',
    fontWeight: '700',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: '#334155',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '78%',
    height: '100%',
    backgroundColor: '#38bdf8',
    borderRadius: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    paddingVertical: 10,
    borderRadius: 12,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#38bdf8',
    fontWeight: '700',
  },
});
