import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  Alert,
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

export default function FormShowcase() {
  // 1. Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 2. UI & Feedback States
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 3. Handle Submit (Validation + Simulated API delay)
  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all required fields (Name, Email, Password).');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        '🎉 Success!',
        `Profile for "${name}" has been created successfully.`,
        [
          { text: 'View Summary', onPress: () => setIsModalVisible(true) },
          { text: 'OK', style: 'cancel' },
        ]
      );
    }, 2000);
  };

  // 4. Handle Reset with Native Alert Confirmation
  const handleReset = () => {
    Alert.alert(
      'Reset Form?',
      'Are you sure you want to clear all entered details?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Reset',
          style: 'destructive',
          onPress: () => {
            setName('');
            setEmail('');
            setPassword('');
            setBio('');
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardContainer}
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        bounces={true}
      >
        {/* Header & Image Section */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
            }}
            style={styles.avatar}
            resizeMode="cover"
          />
          <Text style={styles.headerTitle}>Component Showcase</Text>
          <Text style={styles.headerSubtitle}>Day 4 Core RN Components Demo</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Name Field */}
          <Text style={styles.label}>Full Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Anuraj Singh"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            returnKeyType="next"
          />

          {/* Email Field */}
          <Text style={styles.label}>Email Address *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. anuraj@example.com"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />

          {/* Password Field with Show/Hide Toggle */}
          <Text style={styles.label}>Password *</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter secure password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
            />
            <Pressable
              style={styles.toggleBtn}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Text style={styles.toggleBtnText}>
                {isPasswordVisible ? 'Hide' : 'Show'}
              </Text>
            </Pressable>
          </View>

          {/* Bio / Textarea */}
          <View style={styles.labelRow}>
            <Text style={styles.label}>Bio / Note</Text>
            <Text style={styles.charCount}>{bio.length}/120</Text>
          </View>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tell us something about yourself..."
            placeholderTextColor="#888"
            value={bio}
            onChangeText={setBio}
            multiline={true}
            numberOfLines={4}
            maxLength={120}
            textAlignVertical="top"
          />

          {/* Action Buttons */}
          <View style={styles.buttonGroup}>
            {/* Submit Button */}
            <Pressable
              style={[styles.btn, styles.submitBtn, isLoading && styles.btnDisabled]}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.btnText}>Submit Profile</Text>
              )}
            </Pressable>

            {/* Preview Modal Button */}
            <Pressable
              style={[styles.btn, styles.modalTriggerBtn]}
              onPress={() => setIsModalVisible(true)}
            >
              <Text style={styles.modalBtnText}>Preview Card</Text>
            </Pressable>

            {/* Reset Button */}
            <Pressable style={styles.resetBtn} onPress={handleReset}>
              <Text style={styles.resetBtnText}>Clear Form</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Preview Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <Text style={styles.modalHeading}>User Profile Preview</Text>

            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Name:</Text>
              <Text style={styles.previewValue}>{name || 'Not provided'}</Text>
            </View>

            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Email:</Text>
              <Text style={styles.previewValue}>{email || 'Not provided'}</Text>
            </View>

            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Bio:</Text>
              <Text style={styles.previewValue}>{bio || 'No bio entered'}</Text>
            </View>

            <Pressable
              style={styles.modalCloseBtn}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalCloseBtnText}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#4F46E5',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 10,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  charCount: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1F2937',
  },
  toggleBtn: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  toggleBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4F46E5',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    marginTop: 20,
    gap: 10,
  },
  btn: {
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    backgroundColor: '#4F46E5',
  },
  btnDisabled: {
    opacity: 0.7,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  modalTriggerBtn: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  modalBtnText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '600',
  },
  resetBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  resetBtnText: {
    color: '#EF4444',
    fontSize: 13,
    fontWeight: '500',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  previewRow: {
    marginBottom: 12,
  },
  previewLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
  },
  previewValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
    marginTop: 2,
  },
  modalCloseBtn: {
    marginTop: 18,
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalCloseBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});