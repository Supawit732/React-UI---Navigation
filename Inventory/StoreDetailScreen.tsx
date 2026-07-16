import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from './components';
import { stores } from './products';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function StoreDetailScreen({ navigate, goBack, params }: ScreenProps) {
  const store = stores.find((s) => s.id === params?.storeId) ?? stores[0];

  const stats = [
    { label: 'Employees', value: String(store.employees), icon: 'EMP' },
    { label: 'Products', value: String(store.products), icon: 'PRD' },
    { label: 'Orders', value: String(store.orders), icon: 'ORD' },
    { label: 'Satisfaction', value: `${store.satisfaction}%`, icon: 'SAT' },
  ];

  return (
    <View style={sharedStyles.container}>
      <AppHeader title="Store detail" onBack={goBack} onProfile={() => navigate('settings')} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[sharedStyles.card, styles.hero]}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroIcon}>ST</Text>
          </View>
          <Text style={styles.heroName}>{store.name}</Text>
          <Text style={sharedStyles.mutedText}>{store.city}</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Overview</Text>
        <View style={styles.grid}>
          {stats.map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statIcon}>{stat.icon}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={sharedStyles.mutedText}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text style={sharedStyles.sectionTitle}>Performance</Text>
        <View style={sharedStyles.card}>
          <View style={styles.progressLabel}>
            <Text style={styles.progressTitle}>Customer satisfaction</Text>
            <Text style={styles.progressValue}>{store.satisfaction}%</Text>
          </View>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${store.satisfaction}%` }]} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  heroBadge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  heroIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  heroName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  progressLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
});
