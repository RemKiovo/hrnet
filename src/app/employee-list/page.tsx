'use client'

import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employees)
  return (
    <DataTable
      columns={columns}
      data={employees}
    />
  )
}

export default EmployeeList
