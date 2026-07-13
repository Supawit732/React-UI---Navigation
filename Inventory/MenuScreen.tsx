import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, sharedStyles } from './theme';
import { AppLogo, MenuIconBadge } from './components';
import { ScreenName, ScreenProps } from './types';

const menuItems: {
  label: string;
  screen: ScreenName;
  icon: 'home' | 'products' | 'categories' | 'stores' | 'finances' | 'settings';
}[] = [
  { label: 'Home', screen: 'home', icon: 'home' },
  { label: 'Products', screen: 'products', icon: 'products' },
  { label: 'Categories', screen: 'categories', icon: 'categories' },
  { label: 'Stores', screen: 'stores', icon: 'stores' },
  { label: 'Finances', screen: 'finances', icon: 'finances' },
  { label: 'Settings', screen: 'settings', icon: 'settings' },
];

export default function MenuScreen({ navigate, goBack, logout }: ScreenProps) {
  return (
    <SafeAreaView style={sharedStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.closeBtn} onPress={goBack} hitSlop={12}>
          <Text style={styles.close}>Close</Text>
        </TouchableOpacity>
        <Text style={sharedStyles.headerTitle}>Menu</Text>
        {/* Spacer clears Expo Go Tools gear on the right */}
        <View style={styles.rightSpacer} />
      </View>

      <View style={styles.brand}>
        <AppLogo size={64} />
        <Text style={styles.brandName}>Inventor.io</Text>
      </View>

      <View style={styles.list}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.screen}
            style={styles.item}
            onPress={() => navigate(item.screen)}
            activeOpacity={0.7}
          >
            <MenuIconBadge name={item.icon} />
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logout} onPress={logout} activeOpacity={0.7}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeBtn: {
    minWidth: 64,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  close: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  rightSpacer: {
    minWidth: 64,
    height: 40,
  },
  brand: {
    alignItems: 'center',
    paddingVertical: 28,
    gap: 10,
  },
  brandName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
    gap: 14,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  chevron: {
    fontSize: 18,
    color: colors.muted,
    fontWeight: '600',
  },
  logout: {
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 32,
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
