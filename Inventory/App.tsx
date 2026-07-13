import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailScreen from './ProductDetailScreen';
import CategoriesScreen from './CategoriesScreen';
import CategoryDetailScreen from './CategoryDetailScreen';
import StoresScreen from './StoresScreen';
import StoreDetailScreen from './StoreDetailScreen';
import AddProductScreen from './AddProductScreen';
import FinancesScreen from './FinancesScreen';
import SettingsScreen from './SettingsScreen';
import { NavigateParams, ScreenName, ScreenProps } from './types';

type HistoryEntry = {
  screen: ScreenName;
  params?: NavigateParams;
};

type Direction = 'forward' | 'back' | 'replace';

type ScreenTransitionProps = {
  screenKey: string;
  direction: Direction;
  children: React.ReactNode;
};

function ScreenTransition({ screenKey, direction, children }: ScreenTransitionProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fromX = direction === 'forward' ? 36 : direction === 'back' ? -28 : 0;
    const fromY = direction === 'replace' ? 10 : 0;

    opacity.setValue(0);
    translateX.setValue(fromX);
    translateY.setValue(fromY);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [screenKey, direction, opacity, translateX, translateY]);

  return (
    <Animated.View
      style={[
        styles.fill,
        {
          opacity,
          transform: [{ translateX }, { translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

function renderScreen(screen: ScreenName, props: ScreenProps) {
  switch (screen) {
    case 'home':
      return <HomeScreen {...props} />;
    case 'menu':
      return <MenuScreen {...props} />;
    case 'products':
      return <ProductsScreen {...props} />;
    case 'productDetail':
      return <ProductDetailScreen {...props} />;
    case 'categories':
      return <CategoriesScreen {...props} />;
    case 'categoryDetail':
      return <CategoryDetailScreen {...props} />;
    case 'stores':
      return <StoresScreen {...props} />;
    case 'storeDetail':
      return <StoreDetailScreen {...props} />;
    case 'addProduct':
      return <AddProductScreen {...props} />;
    case 'finances':
      return <FinancesScreen {...props} />;
    case 'settings':
      return <SettingsScreen {...props} />;
    default:
      return <HomeScreen {...props} />;
  }
}

function entryKey(entry: HistoryEntry) {
  const { productId, categoryId, storeId } = entry.params ?? {};
  return `${entry.screen}:${productId ?? ''}:${categoryId ?? ''}:${storeId ?? ''}`;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([{ screen: 'home' }]);
  const [direction, setDirection] = useState<Direction>('replace');
  const loginOpacity = useRef(new Animated.Value(1)).current;

  const current = history[history.length - 1];

  const navigate = (screen: ScreenName, params?: NavigateParams) => {
    setDirection(screen === 'menu' ? 'back' : 'forward');
    setHistory((prev) => [...prev, { screen, params }]);
  };

  const goBack = () => {
    setDirection('back');
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setDirection('replace');
    setHistory([{ screen: 'home' }]);
    loginOpacity.setValue(0);
    Animated.timing(loginOpacity, {
      toValue: 1,
      duration: 280,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const handleLogin = () => {
    Animated.timing(loginOpacity, {
      toValue: 0,
      duration: 180,
      useNativeDriver: true,
    }).start(() => {
      setDirection('replace');
      setIsLoggedIn(true);
    });
  };

  if (!isLoggedIn) {
    return (
      <Animated.View style={[styles.fill, { opacity: loginOpacity }]}>
        <LoginScreen onLogin={handleLogin} />
      </Animated.View>
    );
  }

  const props: ScreenProps = {
    navigate,
    goBack,
    logout,
    params: current.params,
  };

  const key = entryKey(current);

  return (
    <View style={styles.fill}>
      <ScreenTransition screenKey={key} direction={direction}>
        {renderScreen(current.screen, props)}
      </ScreenTransition>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
