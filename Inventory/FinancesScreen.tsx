import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from './components';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

const months = [
  { label: 'Jan', revenue: 8200, expense: 4100 },
  { label: 'Feb', revenue: 9100, expense: 4300 },
  { label: 'Mar', revenue: 10500, expense: 4800 },
  { label: 'Apr', revenue: 9800, expense: 4500 },
  { label: 'May', revenue: 11200, expense: 5100 },
  { label: 'Jun', revenue: 12480, expense: 5400 },
];

export default function FinancesScreen({ navigate }: ScreenProps) {
  const maxRevenue = Math.max(...months.map((m) => m.revenue));

  return (
    <View style={sharedStyles.container}>
      <AppHeader
        title="Finances"
        onMenu={() => navigate('menu')}
        onProfile={() => navigate('settings')}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, styles.summaryPrimary]}>
            <Text style={styles.summaryLabelLight}>Revenue</Text>
            <Text style={styles.summaryValueLight}>$12,480</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={sharedStyles.mutedText}>Expenses</Text>
            <Text style={styles.summaryValue}>$5,400</Text>
          </View>
        </View>

        <Text style={sharedStyles.sectionTitle}>Monthly revenue</Text>
        <View style={sharedStyles.card}>
          <View style={styles.chart}>
            {months.map((m) => (
              <View key={m.label} style={styles.barWrap}>
                <View
                  style={[
                    styles.bar,
                    { height: Math.max(20, (m.revenue / maxRevenue) * 120) },
                  ]}
                />
                <Text style={styles.barLabel}>{m.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={sharedStyles.sectionTitle}>Breakdown</Text>
        {months.slice().reverse().map((m) => (
          <View key={m.label} style={[sharedStyles.card, styles.row]}>
            <View>
              <Text style={styles.rowTitle}>{m.label} 2025</Text>
              <Text style={sharedStyles.mutedText}>Expense ${m.expense.toLocaleString()}</Text>
            </View>
            <Text style={styles.rowValue}>${m.revenue.toLocaleString()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  summaryPrimary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  summaryLabelLight: {
    color: colors.primaryMuted,
    fontSize: 13,
    marginBottom: 6,
  },
  summaryValueLight: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginTop: 6,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 150,
  },
  barWrap: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 20,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginBottom: 6,
  },
  barLabel: {
    fontSize: 11,
    color: colors.muted,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
  },
});
