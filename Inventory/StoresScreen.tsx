import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppHeader } from './components';
import { stores } from './products';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function StoresScreen({ navigate }: ScreenProps) {
  return (
    <View style={sharedStyles.container}>
      <AppHeader
        title="Stores"
        onMenu={() => navigate('menu')}
        onProfile={() => navigate('settings')}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {stores.map((store) => (
          <TouchableOpacity
            key={store.id}
            style={styles.item}
            onPress={() => navigate('storeDetail', { storeId: store.id })}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>ST</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{store.name}</Text>
              <Text style={sharedStyles.mutedText}>{store.city}</Text>
              <Text style={sharedStyles.mutedText}>
                {store.products} products · {store.employees} staff
              </Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  chevron: {
    fontSize: 24,
    color: colors.muted,
  },
});
