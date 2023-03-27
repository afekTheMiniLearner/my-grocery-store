import ProxyDB from './proxy';

export const DB_PRODUCTS_URL = 'http://localhost:3004/ProductsData';
export const ProductsProxy = new ProxyDB(DB_PRODUCTS_URL);
