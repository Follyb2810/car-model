'use client'
import { CarProps } from '@/types'
import { generateCarImageUrl } from '@/utils'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment } from 'react'

interface CarDetailProps{
    isOpen:boolean,
    closeModal:()=>void,
    car:CarProps
}
const CarDetails = ({isOpen,car,closeModal}:CarDetailProps) => {
    return (
        <>
         <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10 ' onClose={closeModal}>
            <Transition.Child as={Fragment}
              enter='ease-out duration-300'
              enterTo='opacity-100'
              enterFrom='opacity-0'
              leave='ease-in diration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
                <div  className='fixes inset-0 bg-black bg-opacity-25'/>
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto justify-center p-4 text-center">
            <Transition.Child as={Fragment}
              enter='ease-out duration-300'
              enterTo='opacity-100'
              enterFrom='opacity-0 scale-95'
              leave='ease-in diration-200'
              leaveFrom='opacity-100 scale-95'
              leaveTo='opacity-0'
            >
                <Dialog.Panel className='relative w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto transform bg-white text-left shadow-xl flex flex-col gap-5 transition-all rounded-2xl '>
                    <button
                     type='button'
                     onClick={closeModal}
                     className='absolute top-2 right-2 z-10 p-2  bg-primary-blue-100'
                    >
                      <Image src='/close.svg' alt='' width={20} height={20} /> 

                    </button>
                    <div className="flex-1 flex-col-gap-3">
                        <div className="relative w-full h-40 bg-pattern bg-cover bg center rounded-lg">
                          <Image src={generateCarImageUrl(car)} alt='' fill priority />  
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                            <Image src={generateCarImageUrl(car,'29')} alt='' fill priority />  
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                            <Image src={generateCarImageUrl(car,'33')} alt='' fill priority />  
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                            <Image src={generateCarImageUrl(car,'13')} alt='' fill priority />  
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-col flex gap-2">
                        <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>
                        <div className="mt-3 flex flex-wrap gap-4">
                            {
                                Object.entries(car).map(([key,value])=>(
                                    <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                        <h4 className='text-grey capitalize'>{key.split('_').join(' ')}</h4>
                                        <p className='text-black-100 font-semibold'>{value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Dialog.Panel>

            </Transition.Child>
            </div>
          </Dialog>    
        </Transition>   
        </>
    )
}

export default CarDetails