'use client'

import { useRouter } from 'next/navigation'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

interface ModalProps {
  title: string
  description: string
  buttonText: string
  closeModal: () => void
}

const Modal = ({ title, description, buttonText, closeModal }: ModalProps) => {
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
        className='bg-white p-4 sm:p-6 rounded shadow-md flex flex-col items-center gap-4 relative sm:max-w-sm max-w-xs'
      >
        <h3 className='text-lg sm:text-xl font-bold'>{title}</h3>
        <p className='text-center text-sm sm:text-base'>{description}</p>
        <button
          onClick={closeModal}
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
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default Modal
