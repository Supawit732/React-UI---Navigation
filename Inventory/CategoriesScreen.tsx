import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppHeader, BottomNav } from './components';
import { categories } from './data';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function CategoriesScreen({ navigate }: ScreenProps) {
  return (
    <View style={sharedStyles.container}>
      <AppHeader
        title="Categories"
        onMenu={() => navigate('menu')}
        onProfile={() => navigate('settings')}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.item}
            onPress={() => navigate('categoryDetail', { categoryId: cat.id })}
          >
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{cat.icon}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{cat.name}</Text>
              <Text style={sharedStyles.mutedText}>{cat.count} products</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomNav active="categories" navigate={navigate} />
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
