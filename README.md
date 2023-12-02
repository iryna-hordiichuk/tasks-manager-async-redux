# task-manager-redux-toolkit

An app to help to manage tasks: it adds, deletes and filters tasks, 
displays active and completed status. 

🌲To create this task manager I used 🌳Redux toolkit library, 
namely configureStore and createSlice functions. 
createSlice accepts an object of reducer functions, so I did not use 
createReducer function in this app.
 🌲To update the state I wrote "mutable" code, this is because createSlice uses Immer under the hood. 
🌲createSlice allows to keep the code related to a "slice" in respective seperate 
 file in such a way incapsulating the logic. Also this approach helps 
 with redability and maintainability of the code. 



