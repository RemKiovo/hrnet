import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "HRNet - Employee List",
  description: "View all employees",
};

const EmployeeListLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default EmployeeListLayout;
