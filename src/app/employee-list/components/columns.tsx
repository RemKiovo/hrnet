"use client";

import { Employee } from "@/store";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

import { COLUMNS } from "@/constants";

export const columns: ColumnDef<Employee>[] = COLUMNS.map((columnCol) => ({
  accessorKey: columnCol.key,
  header: ({ column }) => (
    <div className="flex justify-center">
      <button
        className="flex items-center text-sm font-medium text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {columnCol.label}
        <ArrowUp
          className={`ml-2 h-4 w-4 ${
            column.getIsSorted() === "asc" ? "text-violet-700" : "text-black"
          }`}
        />
        <ArrowDown
          className={`ml-2 h-4 w-4 ${
            column.getIsSorted() === "desc" ? "text-violet-700" : "text-black"
          }`}
        />
      </button>
    </div>
  ),
}));
