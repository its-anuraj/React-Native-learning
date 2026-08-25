import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';

// ---------------------- 1. INITIAL MOCK DATA ----------------------
const INITIAL_CONTACTS = [
  { id: '1', name: 'Aarav Patel', phone: '+91 98234 11223', email: 'aarav@gmail.com', tag: 'Work' },
  { id: '2', name: 'Abhishek Roy', phone: '+91 97123 44556', email: 'abhi.roy@outlook.com', tag: 'Personal' },
  { id: '3', name: 'Ananya Sharma', phone: '+91 98991 22334', email: 'ananya.s@gmail.com', tag: 'Family' },
  { id: '4', name: 'Bhavna Kulkarni', phone: '+91 98450 99887', email: 'bhavna.k@gmail.com', tag: 'Work' },
  { id: '5', name: 'Chetan Bhagat', phone: '+91 99100 22334', email: 'chetan@books.com', tag: 'Other' },
  { id: '6', name: 'Deepak Chopra', phone: '+91 98765 43210', email: 'deepak@mind.org', tag: 'Personal' },
  { id: '7', name: 'Divya Nair', phone: '+91 94471 23456', email: 'divya.n@gmail.com', tag: 'Work' },
  { id: '8', name: 'Gaurav Sen', phone: '+91 98332 55667', email: 'gaurav.sen@tech.in', tag: 'Work' },
  { id: '9', name: 'Harshita Kapoor', phone: '+91 98112 33445', email: 'harshita@gmail.com', tag: 'Family' },
  { id: '10', name: 'Ishaan Verma', phone: '+91 97654 12345', email: 'ishaan.v@gmail.com', tag: 'Personal' },
  { id: '11', name: 'Kavita Iyer', phone: '+91 98401 22334', email: 'kavita.iyer@gmail.com', tag: 'Work' },
  { id: '12', name: 'Manish Malhotra', phone: '+91 98200 11223', email: 'manish@fashion.in', tag: 'Personal' },
  { id: '13', name: 'Neha Kakkar', phone: '+91 98199 44556', email: 'neha.k@music.in', tag: 'Family' },
  { id: '14', name: 'Pooja Hegde', phone: '+91 98223 77889', email: 'pooja.h@cinema.com', tag: 'Other' },
  { id: '15', name: 'Rahul Dravid', phone: '+91 98440 11223', email: 'rahul.d@cricket.in', tag: 'Work' },
  { id: '16', name: 'Rohan Mehra', phone: '+91 99887 66554', email: 'rohan.m@gmail.com', tag: 'Personal' },
  { id: '17', name: 'Sneha Reddy', phone: '+91 98490 33445', email: 'sneha.r@gmail.com', tag: 'Work' },
  { id: '18', name: 'Tanmay Bhat', phone: '+91 98201 99887', email: 'tanmay@comedy.in', tag: 'Personal' },
  { id: '19', name: 'Varun Dhawan', phone: '+91 98190 22334', email: 'varun.d@actor.in', tag: 'Other' },
  { id: '20', name: 'Zoya Akhtar', phone: '+91 98200 44556', email: 'zoya@films.in', tag: 'Work' },
];

export default function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('flat'); // 'flat' | 'section'
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // ---------------------- 2. FILTERING LOGIC ----------------------
  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return contacts;
    const query = searchQuery.toLowerCase();
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.phone.includes(query) ||
        c.email.toLowerCase().includes(query)
    );
  }, [contacts, searchQuery]);

  // ---------------------- 3. GROUPING FOR SECTION LIST ----------------------
  const sectionedContacts = useMemo(() => {
    const groups = {};
    filteredContacts.forEach((contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(contact);
    });

    return Object.keys(groups)
      .sort()
      .map((letter) => ({
        title: letter,
        data: groups[letter].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  }, [filteredContacts]);

  // ---------------------- 4. PULL TO REFRESH ----------------------
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setContacts(INITIAL_CONTACTS);
      setSearchQuery('');
      setIsRefreshing(false);
    }, 1200);
  };

  // ---------------------- 5. INFINITE SCROLL SIMULATION ----------------------
  const handleLoadMore = () => {
    if (isLoadingMore || searchQuery.length > 0 || contacts.length >= 30) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      const newItems = [
        {
          id: (contacts.length + 1).toString(),
          name: `New Contact ${contacts.length + 1}`,
          phone: `+91 99999 ${contacts.length + 100}`,
          email: `new${contacts.length + 1}@sample.com`,
          tag: 'Other',
        },
        {
          id: (contacts.length + 2).toString(),
          name: `New Contact ${contacts.length + 2}`,
          phone: `+91 99999 ${contacts.length + 101}`,
          email: `new${contacts.length + 2}@sample.com`,
          tag: 'Personal',
        },
      ];
      setContacts((prev) => [...prev, ...newItems]);
      setIsLoadingMore(false);
    }, 1500);
  };

  // ---------------------- 6. CONTACT PRESS ACTION ----------------------
  const handleContactPress = (contact) => {
    Alert.alert(
      contact.name,
      `📱 Phone: ${contact.phone}\n📧 Email: ${contact.email}\n🏷️ Category: ${contact.tag}`,
      [
        { text: 'Call', onPress: () => Alert.alert('Calling', `Dialing ${contact.phone}...`) },
        { text: 'Message', onPress: () => Alert.alert('Message', `Opening chat with ${contact.name}...`) },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  // ---------------------- 7. RENDER ITEM COMPONENT ----------------------
  const renderContactItem = ({ item }) => {
    const initials = item.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const tagColors = {
      Work: '#2563eb',
      Personal: '#16a34a',
      Family: '#d97706',
      Other: '#6b7280',
    };

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => handleContactPress(item)}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.contactName}>{item.name}</Text>
            <View style={[styles.tagBadge, { backgroundColor: tagColors[item.tag] || '#6b7280' }]}>
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>
          </View>
          <Text style={styles.contactPhone}>{item.phone}</Text>
          <Text style={styles.contactEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ---------------------- 8. HELPER UI COMPONENTS ----------------------
  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🔍</Text>
      <Text style={styles.emptyTitle}>No Contacts Found</Text>
      <Text style={styles.emptySubtitle}>
        "{searchQuery}" se match karta koi contact nahi mila.
      </Text>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#4f46e5" />
        <Text style={styles.footerText}>Loading more contacts...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      {/* HEADER & SEARCH BAR */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📇 Contact Book</Text>
        <Text style={styles.headerSubtitle}>
          {filteredContacts.length} of {contacts.length} Contacts
        </Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, phone or email..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
            clearButtonMode="while-editing"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* TAB SWITCHER */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'flat' && styles.activeTabButton]}
            onPress={() => setActiveTab('flat')}
          >
            <Text style={[styles.tabText, activeTab === 'flat' && styles.activeTabText]}>
              📋 All (FlatList)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'section' && styles.activeTabButton]}
            onPress={() => setActiveTab('section')}
          >
            <Text style={[styles.tabText, activeTab === 'section' && styles.activeTabText]}>
              🔤 Grouped (SectionList)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* BODY CONTENT: FLATLIST OR SECTIONLIST */}
      {activeTab === 'flat' ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContactItem}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmptyComponent}
          ListFooterComponent={renderFooter}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.3}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <SectionList
          sections={sectionedContacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContactItem}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmptyComponent}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          stickySectionHeadersEnabled={true}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

// ---------------------- 9. STYLES ----------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0f172a',
  },
  clearIcon: {
    fontSize: 14,
    color: '#64748b',
    padding: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    padding: 4,
    marginTop: 12,
    gap: 6,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#4f46e5',
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
  },
  activeTabText: {
    color: '#ffffff',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexGrow: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4338ca',
  },
  cardInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    flex: 1,
  },
  tagBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  contactPhone: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 2,
  },
  contactEmail: {
    fontSize: 12,
    color: '#94a3b8',
  },
  separator: {
    height: 10,
  },
  sectionHeader: {
    backgroundColor: '#e2e8f0',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#334155',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyEmoji: {
    fontSize: 50,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  footerLoader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  footerText: {
    fontSize: 13,
    color: '#6366f1',
    fontWeight: '600',
  },
});
