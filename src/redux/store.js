import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer, filtersReducer} from "./reducer";

// configureStore makes reducers composition
//  and creates rootReducer automatically
export const store = configureStore({ 

    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer, 
    },
});
