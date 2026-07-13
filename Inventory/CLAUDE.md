@AGENTS.md

# Claude notes — Inventor.io Inventory

This repo is a **React Native + Expo (~57)** inventory app for an Internet Programming course. Follow `AGENTS.md` as the source of truth.

## Quick context

- Custom navigation in `App.tsx` (history stack + `ScreenTransition` fade/slide). Do **not** add React Navigation unless asked.
- Screens: `*Screen.tsx` — register in `types.ts` (`ScreenName`) and `App.tsx`.
- Shared UI in `components.tsx`: `AppHeader` (top), `BottomNav` + `NavIcon` (bottom), `MenuIconBadge` (Menu page), `AppLogo`.
- Theme: `theme.ts` — Teal `#0F766E` + Slate.
- Mock data: `data.ts` (save to disk — unsaved editor buffer will not update Metro).
- Search is **inline** on `ProductsScreen.tsx` — no separate Search screen.
- Settings profile: **Supawit Leelachayakul** / `supawit.le@ku.th` / `+66959190515` / initials **SL**.

## Top & bottom nav locations

| UI | Definition | Call sites |
|----|------------|------------|
| Top | `AppHeader` in `components.tsx` | Most screens |
| Bottom | `BottomNav` in `components.tsx` | Home, Products, Categories, AddProduct |
| Full menu | `MenuScreen.tsx` | via `navigate('menu')` |

## When editing

1. Match existing layout and naming.
2. No emoji icons — use `NavIcon` / View-based icons.
3. Expo v57 docs: https://docs.expo.dev/versions/v57.0.0/
4. Keep parent Thai doc `สรุปแผนงาน React UI Navigation.md` in sync when screens/behavior change.

## Key files

| Concern | File |
|---------|------|
| Router + transitions | `App.tsx` |
| Types | `types.ts` |
| Products + search | `ProductsScreen.tsx` |
| Menu | `MenuScreen.tsx` |
| Settings profile | `SettingsScreen.tsx` |
| Header / BottomNav / icons | `components.tsx` |
| Theme | `theme.ts` |
