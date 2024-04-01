// taskslice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
 name: 'tasks',
 initialState: JSON.parse(localStorage.getItem('tasks')) || [],
 reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
        localStorage.setItem('tasks', JSON.stringify(state));
      return state.filter(task => task.id !== action.payload);
      
    },
    editTask: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload.id);
      if (taskIndex !== -1) {
        state[taskIndex].text = action.payload.text;
      }
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    taskDone: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state[taskIndex].completed = true;
      }
      localStorage.setItem('tasks', JSON.stringify(state));
    },
 },
});

export const { addTask, deleteTask, editTask, taskDone } = taskSlice.actions;

export default taskSlice.reducer;
