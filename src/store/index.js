// index.js in store directory
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice';

// Middleware to save state to localStorage
const localStorageMiddleware = ({ getState }) => {
 return next => action => {
    const result = next(action);
    // Save state to localStorage after every action
    localStorage.setItem('tasks', JSON.stringify(getState().tasks));
    return result;
 };
};

// Function to load state from localStorage
const loadFromLocalStorage = () => {
 const tasks = localStorage.getItem('tasks');
 return tasks ? JSON.parse(tasks) : [];
};

// Configure the store with the taskReducer and the localStorageMiddleware
const store = configureStore({
 reducer: {
    tasks: taskReducer,
 },
 preloadedState: {
    tasks: loadFromLocalStorage(),
 },
 middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
