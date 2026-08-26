import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  // Params receive karna (optional params safe check)
  const { itemId = 0, title = 'Default Title' } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="document-text-outline" size={40} color="#6366F1" />
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.badge}>Item ID: {itemId}</Text>
        <Text style={styles.description}>
          Yeh screen Stack Navigator ke zariye open hui hai. Top left par automatic back button check karein!
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={18} color="#6366F1" />
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 10,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#EEF2FF',
    color: '#6366F1',
    fontWeight: '600',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#6366F1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    gap: 8,
  },
  backButtonText: {
    color: '#6366F1',
    fontSize: 16,
    fontWeight: '600',
  },
});
