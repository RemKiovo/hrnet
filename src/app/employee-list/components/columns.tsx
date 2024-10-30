'use client'

import { Employee } from '@/store'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowDown, ArrowUp } from 'lucide-react'

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'firstName',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          First Name
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-violet-700' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-violet-700' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Last Name
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'startDate',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Start Date
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'dateOfBirth',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date of Birth
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'department',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black '
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Department
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'street',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Street
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'city',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          City
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'state',
    header: ({ column }) => (
      <div className='flex justify-center'>
        <button
          className='flex items-center text-sm font-medium text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          State
          <ArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'asc' ? 'text-blue-600' : 'text-black'
            }`}
          />
          <ArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === 'desc' ? 'text-blue-600' : 'text-black'
            }`}
          />
        </button>
      </div>
    ),
  },
]
