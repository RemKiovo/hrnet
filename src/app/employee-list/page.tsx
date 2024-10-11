"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";

const EmployeeListPage = () => {
  return (
    <Provider store={store}>
      {store.getState().employees.map((employee) => (
        <ul key={employee.id}>
          <li>{employee.id}</li>
          <li>{employee.firstName}</li>
          <li>{employee.lastName}</li>
          <li>{employee.dateOfBirth}</li>
          <li>{employee.startDate}</li>
          <li>{employee.street}</li>
          <li>{employee.city}</li>
          <li>{employee.state}</li>
          <li>{employee.zipCode}</li>
        </ul>
      ))}
    </Provider>
  );
};

export default EmployeeListPage;
