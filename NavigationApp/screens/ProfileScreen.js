import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={90} color="#6366F1" />
        <Text style={styles.userName}>Anuraj Singh</Text>
        <Text style={styles.userRole}>React Native Developer</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Days Streak</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Target Days</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Dedication</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 8,
  },
  userRole: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6366F1',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
});
