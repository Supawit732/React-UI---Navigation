export type ScreenName =
  | 'login'
  | 'home'
  | 'menu'
  | 'products'
  | 'productDetail'
  | 'categories'
  | 'categoryDetail'
  | 'stores'
  | 'storeDetail'
  | 'addProduct'
  | 'finances'
  | 'settings';

export type Product = {
  id: string;
  name: string;
  stock: number;
  stock_text: string;
  category: string;
  location_count: number;
  location_text: string;
  badge_status: string;
  image_url: string;
  price?: number;
  description?: string;
};

export type Category = {
  id: string;
  name: string;
  count: number;
  icon: string;
};

export type Store = {
  id: string;
  name: string;
  city: string;
  employees: number;
  products: number;
  orders: number;
  satisfaction: number;
};

export type NavigateParams = {
  productId?: string;
  categoryId?: string;
  storeId?: string;
};

export type ScreenProps = {
  navigate: (screen: ScreenName, params?: NavigateParams) => void;
  goBack: () => void;
  logout: () => void;
  params?: NavigateParams;
};
