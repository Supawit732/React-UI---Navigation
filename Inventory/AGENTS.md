# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

---

# Inventor.io — Inventory App

**Stack:** React Native + Expo (~57) + TypeScript  
**Course:** Internet Programming — Kasetsart University Sriracha Campus  
**GUI reference:** [Uizard Inventor.io template](https://app.uizard.io/templates/z6474wwa9pFKrjOlo0o6/overview)

## Goal

Build a stock/inventory management app matching the Uizard Inventor.io GUI, with custom screen navigation (no React Navigation).

## Project structure

```
Inventory/
├── App.tsx                 # Router + ScreenTransition (Animated fade/slide)
├── index.ts
├── types.ts
├── products.ts             # exports from products.json
├── products.json
├── theme.ts                # Teal + Slate
├── components.tsx          # AppHeader, BottomNav, NavIcon, MenuIconBadge, AppLogo
├── LoginScreen.tsx
├── HomeScreen.tsx
├── MenuScreen.tsx
├── ProductsScreen.tsx      # list + inline search
├── ProductDetailScreen.tsx
├── CategoriesScreen.tsx
├── CategoryDetailScreen.tsx
├── StoresScreen.tsx
├── StoreDetailScreen.tsx
├── AddProductScreen.tsx
├── FinancesScreen.tsx
└── SettingsScreen.tsx      # Profile: Supawit Leelachayakul
```

## Screens

| Screen | File | Notes |
|--------|------|-------|
| Login | `LoginScreen.tsx` | Username, password |
| Home | `HomeScreen.tsx` | Dashboard + BottomNav |
| Menu | `MenuScreen.tsx` | Full menu + `MenuIconBadge` icons |
| Products | `ProductsScreen.tsx` | Inline search filter |
| Product detail | `ProductDetailScreen.tsx` | Back header |
| Categories | `CategoriesScreen.tsx` | + BottomNav |
| Category detail | `CategoryDetailScreen.tsx` | Back header |
| Stores / Store detail | `StoresScreen.tsx` / `StoreDetailScreen.tsx` | |
| Add product | `AddProductScreen.tsx` | + BottomNav |
| Finances | `FinancesScreen.tsx` | |
| Settings | `SettingsScreen.tsx` | SL / Supawit Leelachayakul / supawit.le@ku.th / +66959190515 |

## Navigation (`App.tsx`)

Custom history stack — **do not add React Navigation** unless asked.

- `navigate` / `goBack` / `logout`
- `ScreenTransition`: fade + slide (`forward` from right, `back`/menu from left, login fade)

`ScreenName`: `login` | `home` | `menu` | `products` | `productDetail` | `categories` | `categoryDetail` | `stores` | `storeDetail` | `addProduct` | `finances` | `settings`

### Flow

```
Login → Home
         ├─ Menu (☰) → Products / Categories / Stores / Finances / Settings / Log out
         ├─ BottomNav → Home / Add / Products / Categories
         └─ Products → Detail / Add (search filters list inline)
```

## Top & Bottom nav — where the code lives

| Part | Defined in | Used by |
|------|------------|---------|
| Top (`AppHeader`) | `components.tsx` | Most screens (menu or back) |
| Bottom (`BottomNav`) | `components.tsx` | Home, Products, Categories, AddProduct |
| Menu page | `MenuScreen.tsx` | Opened via `navigate('menu')` |
| Icons | `NavIcon`, `MenuIconBadge` in `components.tsx` | BottomNav + Menu |
| Styles | `theme.ts` | `header`, `bottomNav`, `navLabel` |

Do **not** use emoji icons. Prefer `NavIcon` View shapes.

## Shared UI (`components.tsx`)

| Component | Role |
|-----------|------|
| `AppLogo` | Brand mark |
| `NavIcon` | home / add / products / categories / stores / finances / settings |
| `MenuIconBadge` | Teal soft badge wrapping `NavIcon` for Menu list |
| `AppHeader` | Menu/Back + title + profile (`SL` default) |
| `BottomNav` | 4 tabs with active pill |

## Theme (`theme.ts`)

| Token | Value |
|-------|-------|
| `primary` | `#0F766E` |
| `primarySoft` | `#CCFBF1` |
| `bg` | `#F1F5F9` |
| `text` | `#0F172A` |
| `muted` | `#64748B` |
| `border` | `#E2E8F0` |

## Search

Inline on `ProductsScreen.tsx` only — no `SearchScreen` / `'search'` route.

## Data (`products.ts` / `products.json`)

- Source of truth: `products.json`
- Product fields: `id`, `name`, `stock`, `stock_text`, `category`, `location_count`, `location_text`, `badge_status`, `image_url` (+ optional `price`, `description`)
- Also: `categories`, `stores`, `recentActivity`, `topCategories`
- `products.ts` re-exports typed arrays from the JSON
- Save JSON to disk before expecting Metro to pick up changes

## Settings profile

- Initials: `SL`
- Name: Supawit Leelachayakul
- Email: supawit.le@ku.th
- Phone: +66959190515

## Conventions

- Functional components + TypeScript
- `StyleSheet` + `theme.ts`
- `ScreenProps`: `navigate`, `goBack`, `logout`, `params`
- Prefer existing patterns; no React Navigation unless asked
- Save files to disk before expecting Metro to pick up `products.json` URL changes

## Run

```bash
cd Inventory
npx expo start --ios --host lan --port 8081
npm run web
```

## Workshop checklist

- [x] Top menu (`AppHeader`)
- [x] Bottom menu (`BottomNav`)
- [x] ≥ 2 products
- [x] Inline search on Products
- [x] Screen transitions
- [x] Student profile on Settings
