'use client'

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathName = usePathname()
  return (
    <header className='mt-8 text-center'>
      <h1 className='text-4xl font-bold mb-2'>HRNet</h1>
      <Button
        asChild
        variant='link'
      >
        {pathName === '/employee-list' ? (
          <Link href='/'>Create Employee</Link>
        ) : (
          <Link href='/employee-list'>View Current Employees</Link>
        )}
      </Button>
    </header>
  )
}

export default Header
