import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../Features/studentsSlice'; // Make sure the path is correct

const store = configureStore({
  reducer: {
    student: studentReducer
  }
});

export default store;
