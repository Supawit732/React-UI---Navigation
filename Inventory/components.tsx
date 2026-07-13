import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenName } from './types';
import { colors, sharedStyles } from './theme';

type AppLogoProps = {
  size?: number;
};

/** View-based logo — no emoji (broken on some iOS / Expo Go builds) */
export function AppLogo({ size = 72 }: AppLogoProps) {
  const box = size * 0.34;

  return (
    <View
      style={[
        logoStyles.circle,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={logoStyles.iconWrap}>
        <View style={[logoStyles.lid, { width: box + 8, height: box * 0.18 }]} />
        <View
          style={[
            logoStyles.box,
            { width: box, height: box * 0.82, borderRadius: size * 0.06 },
          ]}
        >
          <View style={[logoStyles.boxLine, { width: box * 0.5, height: 2.5 }]} />
        </View>
      </View>
    </View>
  );
}

const logoStyles = StyleSheet.create({
  circle: {
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrap: {
    alignItems: 'center',
  },
  lid: {
    backgroundColor: colors.primary,
    borderRadius: 3,
    marginBottom: 2,
  },
  box: {
    borderWidth: 2.5,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLine: {
    backgroundColor: colors.primary,
    borderRadius: 1,
  },
});

function MenuIcon() {
  return (
    <View style={iconStyles.menuLines}>
      <View style={iconStyles.menuLine} />
      <View style={iconStyles.menuLine} />
      <View style={iconStyles.menuLine} />
    </View>
  );
}

type GlyphProps = {
  label: string;
  active?: boolean;
};

export function Glyph({ label, active }: GlyphProps) {
  return (
    <View style={[iconStyles.glyph, active && iconStyles.glyphActive]}>
      <Text style={[iconStyles.glyphText, active && iconStyles.glyphTextActive]}>{label}</Text>
    </View>
  );
}

type NavIconName = 'home' | 'add' | 'products' | 'categories' | 'stores' | 'finances' | 'settings';

type NavIconProps = {
  name: NavIconName;
  active?: boolean;
};

/** View-based nav icons — no emoji */
export function NavIcon({ name, active }: NavIconProps) {
  const tone = active ? colors.primary : colors.muted;

  if (name === 'home') {
    return (
      <View style={navIconStyles.homeWrap}>
        <View style={[navIconStyles.homeRoof, { borderBottomColor: tone }]} />
        <View style={[navIconStyles.homeBody, { borderColor: tone }]}>
          <View style={[navIconStyles.homeDoor, { backgroundColor: tone }]} />
        </View>
      </View>
    );
  }

  if (name === 'add') {
    return (
      <View style={[navIconStyles.addCircle, active && navIconStyles.addCircleActive]}>
        <View style={[navIconStyles.addBarH, active && navIconStyles.addBarActive]} />
        <View style={[navIconStyles.addBarV, active && navIconStyles.addBarActive]} />
      </View>
    );
  }

  if (name === 'products') {
    return (
      <View style={navIconStyles.boxWrap}>
        <View style={[navIconStyles.boxLid, { backgroundColor: tone }]} />
        <View style={[navIconStyles.boxBody, { borderColor: tone }]}>
          <View style={[navIconStyles.boxLine, { backgroundColor: tone }]} />
        </View>
      </View>
    );
  }

  if (name === 'categories') {
    return (
      <View style={navIconStyles.grid}>
        <View style={[navIconStyles.gridCell, { borderColor: tone, backgroundColor: active ? colors.primarySoft : 'transparent' }]} />
        <View style={[navIconStyles.gridCell, { borderColor: tone, backgroundColor: active ? colors.primarySoft : 'transparent' }]} />
        <View style={[navIconStyles.gridCell, { borderColor: tone, backgroundColor: active ? colors.primarySoft : 'transparent' }]} />
        <View style={[navIconStyles.gridCell, { borderColor: tone, backgroundColor: active ? colors.primarySoft : 'transparent' }]} />
      </View>
    );
  }

  if (name === 'stores') {
    return (
      <View style={navIconStyles.storeWrap}>
        <View style={[navIconStyles.storeRoof, { borderBottomColor: tone }]} />
        <View style={[navIconStyles.storeBody, { borderColor: tone }]}>
          <View style={[navIconStyles.storeAwning, { backgroundColor: tone }]} />
          <View style={navIconStyles.storeDoorRow}>
            <View style={[navIconStyles.storeDoor, { borderColor: tone }]} />
            <View style={[navIconStyles.storeWindow, { borderColor: tone }]} />
          </View>
        </View>
      </View>
    );
  }

  if (name === 'finances') {
    return (
      <View style={[navIconStyles.coin, { borderColor: tone }]}>
        <View style={[navIconStyles.coinBar, { backgroundColor: tone }]} />
        <View style={[navIconStyles.coinBarShort, { backgroundColor: tone }]} />
      </View>
    );
  }

  // settings — gear made of View rings
  return (
    <View style={navIconStyles.gearWrap}>
      <View style={[navIconStyles.gearOuter, { borderColor: tone }]} />
      <View style={[navIconStyles.gearTooth, navIconStyles.gearToothN, { backgroundColor: tone }]} />
      <View style={[navIconStyles.gearTooth, navIconStyles.gearToothS, { backgroundColor: tone }]} />
      <View style={[navIconStyles.gearTooth, navIconStyles.gearToothE, { backgroundColor: tone }]} />
      <View style={[navIconStyles.gearTooth, navIconStyles.gearToothW, { backgroundColor: tone }]} />
      <View style={[navIconStyles.gearInner, { backgroundColor: active ? colors.primarySoft : colors.white, borderColor: tone }]} />
    </View>
  );
}

type MenuIconProps = {
  name: NavIconName;
};

export function MenuIconBadge({ name }: MenuIconProps) {
  return (
    <View style={menuBadgeStyles.badge}>
      <NavIcon name={name} active />
    </View>
  );
}

const iconStyles = StyleSheet.create({
  menuLines: {
    width: 20,
    height: 14,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    backgroundColor: colors.text,
    borderRadius: 1,
  },
  glyph: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  glyphActive: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
  },
  glyphText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.muted,
  },
  glyphTextActive: {
    color: colors.primary,
  },
});

const navIconStyles = StyleSheet.create({
  homeWrap: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  homeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: -1,
  },
  homeBody: {
    width: 16,
    height: 12,
    borderWidth: 2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  homeDoor: {
    width: 5,
    height: 6,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  addCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCircleActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  addBarH: {
    position: 'absolute',
    width: 12,
    height: 2.5,
    borderRadius: 2,
    backgroundColor: colors.muted,
  },
  addBarV: {
    position: 'absolute',
    width: 2.5,
    height: 12,
    borderRadius: 2,
    backgroundColor: colors.muted,
  },
  addBarActive: {
    backgroundColor: colors.white,
  },
  boxWrap: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxLid: {
    width: 18,
    height: 3,
    borderRadius: 1.5,
    marginBottom: 2,
  },
  boxBody: {
    width: 16,
    height: 12,
    borderWidth: 2,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxLine: {
    width: 8,
    height: 2,
    borderRadius: 1,
  },
  grid: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  gridCell: {
    width: 8.5,
    height: 8.5,
    borderWidth: 2,
    borderRadius: 2,
  },
  storeWrap: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  storeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  storeBody: {
    width: 18,
    height: 13,
    borderWidth: 2,
    borderTopWidth: 0,
    borderRadius: 2,
    overflow: 'hidden',
    alignItems: 'center',
  },
  storeAwning: {
    width: '100%',
    height: 3,
    opacity: 0.85,
  },
  storeDoorRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: 1,
  },
  storeDoor: {
    width: 5,
    height: 7,
    borderWidth: 1.5,
    borderBottomWidth: 0,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  storeWindow: {
    width: 5,
    height: 5,
    borderWidth: 1.5,
    borderRadius: 1,
    marginBottom: 1,
  },
  coin: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  coinBar: {
    width: 2.5,
    height: 9,
    borderRadius: 1,
  },
  coinBarShort: {
    position: 'absolute',
    width: 8,
    height: 2.5,
    borderRadius: 1,
    top: 5,
  },
  gearWrap: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gearOuter: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
  },
  gearTooth: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 1,
  },
  gearToothN: { top: 0 },
  gearToothS: { bottom: 0 },
  gearToothE: { right: 0 },
  gearToothW: { left: 0 },
  gearInner: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 2,
  },
});

const menuBadgeStyles = StyleSheet.create({
  badge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type AppHeaderProps = {
  title: string;
  onMenu?: () => void;
  onProfile?: () => void;
  onBack?: () => void;
  rightLabel?: string;
};

export function AppHeader({ title, onMenu, onProfile, onBack, rightLabel }: AppHeaderProps) {
  return (
    <SafeAreaView style={sharedStyles.safeHeader}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={sharedStyles.header}>
        {onBack ? (
          <TouchableOpacity style={sharedStyles.iconButton} onPress={onBack}>
            <Text style={sharedStyles.iconText}>{'<'}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={sharedStyles.iconButton} onPress={onMenu}>
            <MenuIcon />
          </TouchableOpacity>
        )}
        <Text style={sharedStyles.headerTitle}>{title}</Text>
        {onProfile ? (
          <TouchableOpacity style={sharedStyles.profileButton} onPress={onProfile}>
            <Text style={profileStyles.initials}>{rightLabel ?? 'SL'}</Text>
          </TouchableOpacity>
        ) : (
          <View style={sharedStyles.iconButton} />
        )}
      </View>
    </SafeAreaView>
  );
}

type BottomNavProps = {
  active: 'home' | 'addProduct' | 'products' | 'categories';
  navigate: (screen: ScreenName) => void;
};

export function BottomNav({ active, navigate }: BottomNavProps) {
  const items: {
    key: BottomNavProps['active'];
    label: string;
    icon: NavIconName;
    screen: ScreenName;
  }[] = [
    { key: 'home', label: 'Home', icon: 'home', screen: 'home' },
    { key: 'addProduct', label: 'Add', icon: 'add', screen: 'addProduct' },
    { key: 'products', label: 'Products', icon: 'products', screen: 'products' },
    { key: 'categories', label: 'Categories', icon: 'categories', screen: 'categories' },
  ];

  return (
    <View style={sharedStyles.bottomNav}>
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <TouchableOpacity
            key={item.key}
            style={sharedStyles.navItem}
            onPress={() => navigate(item.screen)}
            activeOpacity={0.7}
          >
            <View style={[bottomNavStyles.iconSlot, isActive && bottomNavStyles.iconSlotActive]}>
              <NavIcon name={item.icon} active={isActive} />
            </View>
            <Text style={[sharedStyles.navLabel, isActive && sharedStyles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const bottomNavStyles = StyleSheet.create({
  iconSlot: {
    width: 44,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  iconSlotActive: {
    backgroundColor: colors.primarySoft,
  },
});

const profileStyles = StyleSheet.create({
  initials: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
});
