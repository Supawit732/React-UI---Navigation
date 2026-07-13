import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppHeader, BottomNav } from './components';
import { colors, sharedStyles } from './theme';
import { ScreenProps } from './types';

export default function AddProductScreen({ navigate, goBack }: ScreenProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    Alert.alert('Product saved', `${name || 'New product'} has been added.`);
    navigate('products');
  };

  return (
    <View style={sharedStyles.container}>
      <AppHeader title="Add product" onBack={goBack} onMenu={() => navigate('menu')} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={sharedStyles.label}>Product name</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="e.g. iPhone 16 Pro"
            placeholderTextColor={colors.placeholder}
            value={name}
            onChangeText={setName}
          />

          <Text style={sharedStyles.label}>Category</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="e.g. Phones"
            placeholderTextColor={colors.placeholder}
            value={category}
            onChangeText={setCategory}
          />

          <Text style={sharedStyles.label}>Stock</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="0"
            placeholderTextColor={colors.placeholder}
            keyboardType="numeric"
            value={stock}
            onChangeText={setStock}
          />

          <Text style={sharedStyles.label}>Price ($)</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="0.00"
            placeholderTextColor={colors.placeholder}
            keyboardType="decimal-pad"
            value={price}
            onChangeText={setPrice}
          />

          <Text style={sharedStyles.label}>Location</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="e.g. 2 stores"
            placeholderTextColor={colors.placeholder}
            value={location}
            onChangeText={setLocation}
          />

          <Text style={sharedStyles.label}>Description</Text>
          <TextInput
            style={[sharedStyles.input, styles.textArea]}
            placeholder="Short product description"
            placeholderTextColor={colors.placeholder}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={sharedStyles.primaryButton} onPress={handleSave}>
            <Text style={sharedStyles.primaryButtonText}>Save product</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomNav active="addProduct" navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
});
