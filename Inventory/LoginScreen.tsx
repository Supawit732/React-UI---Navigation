import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors, sharedStyles } from './theme';
import { AppLogo } from './components';

type LoginScreenProps = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.brandBlock}>
          <AppLogo size={72} />
          <Text style={styles.brandName}>Inventor.io</Text>
          <Text style={styles.subtitle}>Sign in to manage your inventory</Text>
        </View>

        <View style={styles.form}>
          <Text style={sharedStyles.label}>Username</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="Enter username"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={sharedStyles.label}>Password</Text>
          <TextInput
            style={sharedStyles.input}
            placeholder="Enter password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={sharedStyles.primaryButton} onPress={handleLogin}>
            <Text style={sharedStyles.primaryButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brandBlock: {
    alignItems: 'center',
    marginBottom: 40,
    gap: 16,
  },
  brandName: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
});
