import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CardLayout(){
  const[isOnline,setIsOnline]=useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>1. Card Layout (Row + Absolute Badge)</Text>
      <View style={styles.card}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' }}
            style={styles.avatar}
          />
          <View style={[styles.statusBadge, isOnline ? styles.online : styles.offline]} />
        </View>

         <View style={styles.infoContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Priya Sharma</Text>
            <Text style={styles.rating}>⭐ 4.9</Text>
          </View>

           <Text style={styles.role}>React Native Developer</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}><Text style={styles.tagText}>UI/UX</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Expo</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>TypeScript</Text></View>
          </View>
        </View>
      </View>
 <TouchableOpacity 
        style={styles.toggleBtn} 
        onPress= {
          () => setIsOnline(prev => !prev)
        }
        activeOpacity={0.2}
      >
        <Text style={styles.toggleBtnText}>
          Toggle Status (Current: {isOnline ? '🟢 Online' : '⚪ Offline'})
        </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles=StyleSheet.create({
   container: {
    marginVertical: 12,
  },
     sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

    avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
    
    avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#cbd5e1',
  },

  statusBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },


    online: {
    backgroundColor: '#22c55e',
  },
  offline: {
    backgroundColor: '#94a3b8',
  },

  infoContainer: {
    flex: 1,
  },
  
   nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

   rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ca8a04',
  },
  role: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
   tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4f46e5',
  },

   toggleBtn: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },

   toggleBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
})