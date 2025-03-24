<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../Features/studentsSlice'; // Make sure the path is correct

const store = configureStore({
  reducer: {
    student: studentReducer
  }
=======
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/Studentslice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
>>>>>>> d033001 (third)
});

export default store;
