"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateEmployeePage from "./(create-employee)/page";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container mx-auto py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">HRNet</h1>
          <Button asChild variant="link">
            <Link href="/employee-list">View Current Employees</Link>
          </Button>
        </header>
        <CreateEmployeePage />
      </div>
    </Provider>
  );
}
