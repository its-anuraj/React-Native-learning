import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export default function PlatformShadowBox() {
  const [depth, setDepth] = useState(2);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>5. Platform Styles & Shadows</Text>
      <Text style={styles.subtext}>
        Current OS: {Platform.OS.toUpperCase()} (v{Platform.Version})
      </Text>

      <View style={styles.depthSelector}>
        <Text style={styles.depthLabel}>Shadow Depth:</Text>
        {[
          { level: 1, name: 'Subtle' },
          { level: 2, name: 'Medium' },
          { level: 3, name: 'Deep' },
        ].map((item) => (
          <TouchableOpacity
            key={item.level}
            style={[styles.depthBtn, depth === item.level && styles.depthBtnActive]}
            onPress={() => setDepth(item.level)}
            activeOpacity={0.7}
          >
            <Text style={[styles.depthBtnText, depth === item.level && styles.depthBtnTextActive]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.cardsRow}>
        <View
          style={[
            styles.shadowCard,
            depth === 1 && styles.depthLow,
            depth === 2 && styles.depthMed,
            depth === 3 && styles.depthHigh,
          ]}
        >
          <Text style={styles.cardTitle}>Native Shadow Preview</Text>
          <Text style={styles.cardBody}>
            {Platform.OS === 'android'
              ? `elevation: ${depth === 1 ? 2 : depth === 2 ? 6 : 14}`
              : `shadowRadius: ${depth === 1 ? 4 : depth === 2 ? 8 : 16}`}
          </Text>
          <View style={styles.chip}>
            <Text style={styles.chipText}>
              {Platform.OS === 'android' ? '🤖 Material Elevation' : '🍏 Apple Shadow'}
            </Text>
          </View>
        </View>

        <View style={styles.platformCard}>
          <Text style={styles.platformHeader}>Active Platform Code</Text>
          <Text style={styles.platformSnippet}>
            {Platform.select({
              ios: `Platform.select({\n  ios: { shadowColor: '#000',\n        shadowRadius: 8 }\n})`,
              android: `Platform.select({\n  android: { elevation: 6 }\n})`,
              default: `Platform.OS: ${Platform.OS}`,
            })}
          </Text>
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
    marginBottom: 4,
  },
  subtext: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 12,
  },
  depthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },
  depthLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  depthBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  depthBtnActive: {
    backgroundColor: '#4f46e5',
    borderColor: '#4338ca',
  },
  depthBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  depthBtnTextActive: {
    color: '#ffffff',
  },
  cardsRow: {
    flexDirection: 'column',
    gap: 12,
  },
  shadowCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  depthLow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  depthMed: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  depthHigh: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 14,
      },
    }),
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  cardBody: {
    fontSize: 13,
    color: '#64748b',
    marginVertical: 6,
  },
  chip: {
    backgroundColor: '#f0fdf4',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  chipText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#16a34a',
  },
  platformCard: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 14,
  },
  platformHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  platformSnippet: {
    fontSize: 12,
    color: '#38bdf8',
    lineHeight: 18,
  },
});
