import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function ResponsiveBox() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>4. Responsive Design (useWindowDimensions)</Text>

      <View style={styles.metricsRow}>
        <View style={styles.metricBadge}>
          <Text style={styles.metricLabel}>Width</Text>
          <Text style={styles.metricVal}>{Math.round(width)} dp</Text>
        </View>
        <View style={styles.metricBadge}>
          <Text style={styles.metricLabel}>Height</Text>
          <Text style={styles.metricVal}>{Math.round(height)} dp</Text>
        </View>
        <View style={styles.metricBadge}>
          <Text style={styles.metricLabel}>Mode</Text>
          <Text style={styles.metricVal}>{isPortrait ? '📱 Portrait' : '🔄 Landscape'}</Text>
        </View>
      </View>

      <View style={styles.responsiveWrapper}>
        <View style={[styles.responsiveCard, { width: width * 0.85 }]}>
          <Text style={styles.cardHeader}>85% Screen Width Container</Text>
          <Text style={styles.cardDesc}>
            Calculated: {Math.round(width * 0.85)} px width
          </Text>

          <View style={styles.barStack}>
            <View style={[styles.bar, { width: '100%', backgroundColor: '#6366f1' }]}>
              <Text style={styles.barText}>100% of Card</Text>
            </View>
            <View style={[styles.bar, { width: '75%', backgroundColor: '#8b5cf6' }]}>
              <Text style={styles.barText}>75%</Text>
            </View>
            <View style={[styles.bar, { width: '50%', backgroundColor: '#a855f7' }]}>
              <Text style={styles.barText}>50%</Text>
            </View>
          </View>
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
  metricsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  metricBadge: {
    flex: 1,
    backgroundColor: '#e0e7ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 11,
    color: '#4338ca',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  metricVal: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1e1b4b',
    marginTop: 2,
  },
  responsiveWrapper: {
    alignItems: 'center',
  },
  responsiveCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
  },
  cardDesc: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  barStack: {
    marginTop: 14,
    gap: 6,
  },
  bar: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  barText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
});
