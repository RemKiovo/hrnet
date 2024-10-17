'use client'

import { useRouter } from 'next/navigation'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

interface ModalProps {
  closeModal: () => void
}

const Modal = ({ closeModal }: ModalProps) => {
  const router = useRouter()

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: 'blur(2px)' }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleOutsideClick}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-white p-6 rounded shadow-md flex flex-col items-center gap-4 relative'
      >
        <h3 className='text-xl font-bold'>Employee Created</h3>
        <p className='text-center'>
          The new employee has been created successfully!
        </p>
        <button
          onClick={() => {
            closeModal()
          }}
          className='absolute -top-2 -right-2 rounded-full bg-black text-white p-2'
        >
          <XIcon className='w-4 h-4' />
        </button>
        <Button
          onClick={() => {
            closeModal()
            router.push('/employee-list')
          }}
          className='w-full'
        >
          View Employees
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default Modal
