'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '@/store/store'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PersonalInformationForm from '@/components/PersonalInformationForm'
import AddressForm from '@/components/AddressForm'
import DepartmentForm from '@/components/DepartmentForm'
import { format } from 'date-fns'
import Modal from '../components/Modal'

const CreateEmployeeCard = () => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [street, setStreet] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [zipCode, setZipCode] = useState<number | null>(null)
  const [department, setDepartment] = useState<string>('')
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const validateForm = () => {
    const errors: string[] = []

    if (!firstName) errors.push('First name is required')
    if (!lastName) errors.push('Last name is required')
    if (!dateOfBirth) errors.push('Date of birth is required')
    if (!startDate) errors.push('Start date is required')
    if (!street) errors.push('Street is required')
    if (!city) errors.push('City is required')
    if (!state) errors.push('State is required')
    if (!zipCode) errors.push('Zip code is required')
    if (!department) errors.push('Department is required')

    setFormErrors(errors)
    return errors.length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      dispatch(
        addEmployee({
          id: Date.now().toString(),
          firstName,
          lastName,
          dateOfBirth: dateOfBirth ? format(dateOfBirth, 'MM/dd/yyyy') : '',
          startDate: startDate ? format(startDate, 'MM/dd/yyyy') : '',
          street,
          city,
          state,
          zipCode: Number(zipCode),
          department,
        })
      )
      setIsModalOpen(true) // Show modal on successful creation
      setFirstName('')
      setLastName('')
      setDateOfBirth(undefined)
      setStartDate(undefined)
      setStreet('')
      setCity('')
      setState('')
      setZipCode(null)
      setDepartment('')
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      <section aria-labelledby='create-employee-title'>
        <Card className='w-full max-w-2xl mx-auto'>
          <CardHeader>
            <h2
              id='create-employee-title'
              className='text-center text-2xl font-bold'
            >
              Create New Employee
            </h2>
            <CardDescription className='text-center'>
              Enter the details of the new employee.
            </CardDescription>
          </CardHeader>
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            <CardContent className='space-y-6'>
              {formErrors.length > 0 && (
                <div
                  className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                  role='alert'
                >
                  <strong className='font-bold'>
                    Please correct the following errors:
                  </strong>
                  <ul className='mt-2 list-disc list-inside'>
                    {formErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <PersonalInformationForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                dateOfBirth={dateOfBirth}
                setDateOfBirth={setDateOfBirth}
                startDate={startDate}
                setStartDate={setStartDate}
              />
              <AddressForm
                street={street}
                setStreet={setStreet}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zipCode={zipCode}
                setZipCode={setZipCode}
              />
              <DepartmentForm
                department={department}
                setDepartment={setDepartment}
              />
            </CardContent>
            <CardFooter>
              <Button
                type='submit'
                className='w-full'
              >
                Create Employee
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          title='Employee Created'
          description='The new employee has been created successfully!'
          buttonText='View Employees'
        />
      )}
    </>
  )
}

export default CreateEmployeeCard
