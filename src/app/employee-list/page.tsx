'use client'

import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import { INITIAL_EMPLOYEES } from '@/constants'

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employees)

  const combinedEmployees = useMemo(
    () => [...employees, ...INITIAL_EMPLOYEES],
    [employees]
  )

  return <DataTable columns={columns} data={combinedEmployees} />
}

export default EmployeeList
