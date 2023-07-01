import BaseProxy from './proxy';
import {SERVER_URL} from './consts';

export * from './consts';
export const ProductsProxy = new BaseProxy(SERVER_URL);
