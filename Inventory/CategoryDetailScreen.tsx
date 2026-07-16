import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppHeader } from './components';
import { categories, products } from './products';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function CategoryDetailScreen({ navigate, goBack, params }: ScreenProps) {
  const category = categories.find((c) => c.id === params?.categoryId) ?? categories[0];
  const items = products.filter(
    (p) => p.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <View style={sharedStyles.container}>
      <AppHeader title={category.name} onBack={goBack} onProfile={() => navigate('settings')} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[sharedStyles.card, styles.summary]}>
          <View style={styles.summaryBadge}>
            <Text style={styles.summaryIcon}>{category.icon}</Text>
          </View>
          <View>
            <Text style={styles.summaryTitle}>{category.name}</Text>
            <Text style={sharedStyles.mutedText}>
              {items.length > 0 ? items.length : category.count} products
            </Text>
          </View>
        </View>

        {items.length === 0 ? (
          <View style={sharedStyles.card}>
            <Text style={sharedStyles.mutedText}>No products in this category yet.</Text>
          </View>
        ) : (
          items.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigate('productDetail', { productId: product.id })}
            >
              <Image source={{ uri: product.image_url }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={sharedStyles.mutedText}>{product.stock_text}</Text>
                <Text style={sharedStyles.mutedText}>${product.price?.toFixed(2)}</Text>
              </View>
              <Text style={styles.chevron}>{'>'}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  summaryIcon: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  chevron: {
    fontSize: 22,
    color: colors.muted,
  },
});
