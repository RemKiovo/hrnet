'use client'

import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

import { INITIAL_EMPLOYEES } from '@/constants'

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => [
    ...state.employees,
    ...INITIAL_EMPLOYEES,
  ])
  return <DataTable columns={columns} data={employees} />
}

export default EmployeeList
