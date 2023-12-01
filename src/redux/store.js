import {configureStore} from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

// configureStore makes reducers composition
//  and creates rootReducer automatically
export const store = configureStore({ 

    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer, 
    },
});
