import {createStore} from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { statusFilters } from './constants';

const initialState = {
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
      ],
    
      filters: {
        status: statusFilters.all,
      }

};

const rootReducer = (state = initialState, action) => {
    return state;
};

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
