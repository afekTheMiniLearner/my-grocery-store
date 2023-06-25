import Proxy from './proxy';

export * from './consts';
export const ProductsProxy = new Proxy(process.env.REACT_APP_DB_URL);
