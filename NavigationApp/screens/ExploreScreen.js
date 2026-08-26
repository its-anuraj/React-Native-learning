import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  { id: '1', name: 'React Native Core', icon: 'logo-react', count: '12 Topics' },
  { id: '2', name: 'Navigation Systems', icon: 'navigate', count: '8 Topics' },
  { id: '3', name: 'State Management', icon: 'git-network', count: '10 Topics' },
  { id: '4', name: 'UI & Animations', icon: 'color-palette', count: '15 Topics' },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon} size={22} color="#6366F1" />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.count}>{item.count}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
    marginTop: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  count: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
});
