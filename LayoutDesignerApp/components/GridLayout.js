import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GRID_ITEMS = [
  { id: '1', title: 'Analytics', icon: '📊', color: '#6366f1', count: '1.2k' },
  { id: '2', title: 'Orders', icon: '📦', color: '#ec4899', count: '480' },
  { id: '3', title: 'Customers', icon: '👥', color: '#10b981', count: '9.4k' },
  { id: '4', title: 'Revenue', icon: '💰', color: '#f59e0b', count: '$14.8k' },
  { id: '5', title: 'Tasks', icon: '✅', color: '#06b6d4', count: '32' },
  { id: '6', title: 'Settings', icon: '⚙️', color: '#8b5cf6', count: '6' },
];

export default function GridLayout() {
  const [columns, setColumns] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>2. Grid Layout (flexWrap + gap)</Text>
          <Text style={styles.subtext}>Showing {columns} Columns</Text>
        </View>

        <View style={styles.colSelector}>
          <TouchableOpacity
            style={[styles.colBtn, columns === 2 && styles.colBtnActive]}
            onPress={() => setColumns(2)}
          >
            <Text style={[styles.colBtnText, columns === 2 && styles.colBtnTextActive]}>2x2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.colBtn, columns === 3 && styles.colBtnActive]}
            onPress={() => setColumns(3)}
          >
            <Text style={[styles.colBtnText, columns === 3 && styles.colBtnTextActive]}>3x3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.gridContainer}>
        {GRID_ITEMS.map((item) => {
          const itemWidth = columns === 2 ? '48%' : '30.6%';

          return (
            <View
              key={item.id}
              style={[
                styles.gridCard,
                { width: itemWidth, borderTopColor: item.color, borderTopWidth: 3 },
              ]}
            >
              <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text style={styles.cardCount}>{item.count}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  subtext: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  colSelector: {
    flexDirection: 'row',
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
    padding: 3,
    gap: 4,
  },
  colBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  colBtnActive: {
    backgroundColor: '#4f46e5',
  },
  colBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  colBtnTextActive: {
    color: '#ffffff',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  gridCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 20,
  },
  cardCount: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
  },
  cardTitle: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
    marginTop: 2,
  },
});
