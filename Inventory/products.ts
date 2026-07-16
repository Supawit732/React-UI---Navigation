import { Category, Product, Store } from './types';
import productsData from './products.json';

/** Local fallback for detail / category screens (Products list fetches from GitHub). */
export const products: Product[] = productsData as Product[];

export const categories: Category[] = [
  { id: '1', name: 'Phones', count: 24, icon: 'PH' },
  { id: '2', name: 'Laptops', count: 12, icon: 'LT' },
  { id: '3', name: 'Tablets', count: 10, icon: 'TB' },
  { id: '4', name: 'Audio', count: 18, icon: 'AU' },
  { id: '5', name: 'Wearables', count: 14, icon: 'WR' },
  { id: '6', name: 'Accessories', count: 32, icon: 'AC' },
];

export const stores: Store[] = [
  {
    id: '1',
    name: 'Manchester Store',
    city: 'Manchester',
    employees: 12,
    products: 240,
    orders: 86,
    satisfaction: 92,
  },
  {
    id: '2',
    name: 'Yorkshire Store',
    city: 'Yorkshire',
    employees: 8,
    products: 180,
    orders: 54,
    satisfaction: 88,
  },
  {
    id: '3',
    name: 'Hull Store',
    city: 'Hull',
    employees: 6,
    products: 120,
    orders: 41,
    satisfaction: 85,
  },
  {
    id: '4',
    name: 'Leicester Store',
    city: 'Leicester',
    employees: 10,
    products: 200,
    orders: 67,
    satisfaction: 90,
  },
];

export const recentActivity = [
  { id: '1', text: 'New order #1042 from Manchester', time: '2m ago' },
  { id: '2', text: 'Stock updated: iPhone 16 Pro', time: '15m ago' },
  { id: '3', text: 'Category Phones restocked', time: '1h ago' },
  { id: '4', text: 'New product added: AirPods Pro 2', time: '3h ago' },
];

export const topCategories = [
  { name: 'Phones', sales: 420 },
  { name: 'Audio', sales: 280 },
  { name: 'Accessories', sales: 195 },
];
