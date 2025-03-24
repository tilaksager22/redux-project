import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "vivek", age: 15, course: "MERN", batch: "2024" },
    { id: 2, name: "tilak", age: 18, course: "java", batch: "2024" },
    { id: 3, name: "shivam", age: 20, course: "C++", batch: "2024" },
    { id: 4, name: "Prahlad", age: 22, course: "C", batch: "2024" },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({ id: nanoid(), ...action.payload });
    },
    editStudent: (state, action) => {
      const index = state.students.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
  },
});

export const { addStudent, editStudent } = studentSlice.actions;
export default studentSlice.reducer;
