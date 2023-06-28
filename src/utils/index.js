import BaseProxy from './proxy';

export * from './consts';
export const ProductsProxy = new BaseProxy(process.env.REACT_APP_DB_URL);
