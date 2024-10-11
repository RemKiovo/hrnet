import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  department: string;
}

type EmployeeState = Employee[];

const initialState: EmployeeState = [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
