import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppHeader, BottomNav } from './components';
import { recentActivity, stores, topCategories } from './data';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function HomeScreen({ navigate }: ScreenProps) {
  return (
    <View style={sharedStyles.container}>
      <AppHeader
        title="Home"
        onMenu={() => navigate('menu')}
        onProfile={() => navigate('settings')}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={sharedStyles.sectionTitle}>Recent activity</Text>
        <View style={sharedStyles.card}>
          {recentActivity.map((item) => (
            <View key={item.id} style={styles.activityRow}>
              <View style={styles.dot} />
              <View style={styles.activityText}>
                <Text style={styles.activityTitle}>{item.text}</Text>
                <Text style={sharedStyles.mutedText}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={sharedStyles.sectionTitle}>Sales overview</Text>
        <View style={sharedStyles.card}>
          <View style={styles.chartRow}>
            {[65, 40, 80, 55, 90, 70, 48].map((h, i) => (
              <View key={i} style={styles.barWrap}>
                <View style={[styles.bar, { height: h }]} />
                <Text style={styles.barLabel}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text>
              </View>
            ))}
          </View>
          <Text style={[sharedStyles.mutedText, styles.chartNote]}>Weekly sales · $12,480</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Top categories</Text>
        {topCategories.map((cat) => (
          <View key={cat.name} style={[sharedStyles.card, styles.rowBetween]}>
            <Text style={styles.rowTitle}>{cat.name}</Text>
            <Text style={styles.rowValue}>{cat.sales} sold</Text>
          </View>
        ))}

        <Text style={sharedStyles.sectionTitle}>Stores</Text>
        {stores.map((store) => (
          <TouchableOpacity
            key={store.id}
            style={[sharedStyles.card, styles.rowBetween]}
            onPress={() => navigate('storeDetail', { storeId: store.id })}
          >
            <View>
              <Text style={styles.rowTitle}>{store.name}</Text>
              <Text style={sharedStyles.mutedText}>{store.city}</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomNav active="home" navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: 10,
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 2,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 110,
    marginBottom: 8,
  },
  barWrap: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 18,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginBottom: 6,
  },
  barLabel: {
    fontSize: 11,
    color: colors.muted,
  },
  chartNote: {
    marginTop: 4,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  rowValue: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 24,
    color: colors.muted,
  },
});
