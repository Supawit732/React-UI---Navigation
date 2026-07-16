import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from './components';
import { products, stores } from './products';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function ProductDetailScreen({ navigate, goBack, params }: ScreenProps) {
  const product = products.find((p) => p.id === params?.productId) ?? products[0];

  return (
    <View style={sharedStyles.container}>
      <AppHeader title="Product details" onBack={goBack} onProfile={() => navigate('settings')} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image_url }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <View style={sharedStyles.statusBadge}>
          <Text style={sharedStyles.statusText}>{product.badge_status}</Text>
        </View>

        <View style={[sharedStyles.card, styles.metaCard]}>
          <MetaRow label="Stock" value={product.stock_text} />
          <MetaRow label="Category" value={product.category} />
          <MetaRow label="Location" value={product.location_text} />
          <MetaRow label="Price" value={`$${product.price?.toFixed(2) ?? '—'}`} />
        </View>

        <Text style={sharedStyles.sectionTitle}>Description</Text>
        <View style={sharedStyles.card}>
          <Text style={styles.desc}>{product.description}</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>QR code</Text>
        <View style={[sharedStyles.card, styles.qrBox]}>
          <View style={styles.qr}>
            <Text style={styles.qrText}>QR</Text>
          </View>
          <Text style={sharedStyles.mutedText}>SKU-{product.id.padStart(4, '0')}</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Store availability</Text>
        {stores.slice(0, 3).map((store) => (
          <View key={store.id} style={[sharedStyles.card, styles.storeRow]}>
            <View>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={sharedStyles.mutedText}>{store.city}</Text>
            </View>
            <Text style={styles.inStock}>In stock</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metaRow}>
      <Text style={sharedStyles.mutedText}>{label}</Text>
      <Text style={styles.metaValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    backgroundColor: colors.border,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  metaCard: {
    marginTop: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  metaValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  desc: {
    fontSize: 14,
    color: colors.muted,
    lineHeight: 20,
  },
  qrBox: {
    alignItems: 'center',
  },
  qr: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: colors.text,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.bg,
  },
  qrText: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  storeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  inStock: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 13,
  },
});
