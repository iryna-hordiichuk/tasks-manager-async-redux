import {createStore} from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();
// Although I installed Redux DevTools extensions for my Chrome browser
// as I use vanilla Redux here, Redux DevTools are not initialized 
// automatically (as it is done in Redux ToolKit library);
// So, I need to install a package in order to add enhancer
// in order to connect React DevTools with my application.

// Enhancer - this is a set of middleware(s) (functions)
// which expands store 
// this is a way to add a function to a store

export const store = createStore(rootReducer, enhancer);
// reducer lives in store
