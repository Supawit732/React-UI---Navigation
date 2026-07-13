import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppHeader } from './components';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function SettingsScreen({ navigate, logout }: ScreenProps) {
  return (
    <View style={sharedStyles.container}>
      <AppHeader title="Settings" onMenu={() => navigate('menu')} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[sharedStyles.card, styles.profile]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SL</Text>
          </View>
          <Text style={styles.name}>Supawit Leelachayakul</Text>
          <Text style={sharedStyles.mutedText}>supawit.le@ku.th</Text>
          <View style={[sharedStyles.statusBadge, styles.roleBadge]}>
            <Text style={sharedStyles.statusText}>Manager</Text>
          </View>
        </View>

        <Text style={sharedStyles.sectionTitle}>Personal info</Text>
        <View style={sharedStyles.card}>
          <InfoRow label="Full name" value="Supawit Leelachayakul" />
          <InfoRow label="Email" value="supawit.le@ku.th" />
          <InfoRow label="Phone" value="+66959190515" />
          <InfoRow label="Role" value="Manager" last />
        </View>

        <Text style={sharedStyles.sectionTitle}>Preferences</Text>
        <View style={sharedStyles.card}>
          <InfoRow label="Language" value="English" />
          <InfoRow label="Notifications" value="Enabled" last />
        </View>

        <TouchableOpacity style={styles.logout} onPress={logout}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function InfoRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View style={[styles.infoRow, !last && styles.infoBorder]}>
      <Text style={sharedStyles.mutedText}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  profile: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  roleBadge: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  infoBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  logout: {
    marginTop: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.dangerBorder,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: colors.danger,
    fontWeight: '700',
    fontSize: 16,
  },
});
