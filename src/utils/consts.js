import ProxyDB from './proxy';

export const DB_PRODUCTS_URL = process.env.REACT_APP_DB_URL;
export const ProductsProxy = new ProxyDB(DB_PRODUCTS_URL);

// This mock list used only for storybook
export const MOCK_PRODUCTS = [
  {
    id: '81ff8102-d0dc-4ce1-b944-3a0b4c787c1b',
    productName: 'Beef tallow',
    price: 100,
  },
  {
    id: 'a707701a-3570-482a-8ec3-bb1fa888bcb7',
    productName: 'Cucumber',
    price: 4,
  },
  {
    id: '8ab6e340-cbec-4f71-ab41-2df4e07ce6cf',
    productName: 'Strawberries',
    price: 15,
  },
];
