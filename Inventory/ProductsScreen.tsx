import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppHeader, BottomNav } from './components';
import { products } from './data';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function ProductsScreen({ navigate }: ScreenProps) {
  const [query, setQuery] = useState('');
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={sharedStyles.container}>
      <AppHeader
        title="Products"
        onMenu={() => navigate('menu')}
        onProfile={() => navigate('settings')}
      />

      <View style={styles.searchRow}>
        <TextInput
          style={sharedStyles.searchInput}
          placeholder="Search products..."
          placeholderTextColor={colors.placeholder}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[sharedStyles.primaryButton, styles.addBtn]}
          onPress={() => navigate('addProduct')}
        >
          <Text style={sharedStyles.primaryButtonText}>+ Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sharedStyles.outlineButton}>
          <Text style={sharedStyles.outlineButtonText}>Filter ▼</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {filtered.length === 0 ? (
          <Text style={styles.emptyText}>No products found</Text>
        ) : (
          filtered.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigate('productDetail', { productId: product.id })}
            >
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={sharedStyles.mutedText}>Stock: {product.stock}</Text>
                <Text style={sharedStyles.mutedText}>Category: {product.category}</Text>
                <Text style={sharedStyles.mutedText}>Location: {product.location}</Text>
                <View style={styles.cardFooter}>
                  <View style={sharedStyles.statusBadge}>
                    <Text style={sharedStyles.statusText}>{product.status}</Text>
                  </View>
                  <Text style={styles.moreButton}>{'>'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      <BottomNav active="products" navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchRow: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: colors.white,
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 14,
    gap: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  addBtn: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.muted,
    fontSize: 14,
    marginTop: 32,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    marginBottom: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  moreButton: {
    fontSize: 24,
    color: colors.muted,
    fontWeight: '300',
  },
});
