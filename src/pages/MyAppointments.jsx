import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { doctors } = useContext(AppContext)

    return (
        <div className="px-4 sm:px-6 py-8">
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
                My Appointments
            </p>
            <div>
                {doctors.slice(0, 2).map((item, index) => (
                    <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b' key={index}>
                        <div className="flex justify-center items-center">
                            <img className='w-32 h-32 object-cover rounded-lg bg-indigo-50' src={item.image} alt={item.name} />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold'>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                            <p className='text-xs'>{item.address.line1}</p>
                            <p className='text-xs'>{item.address.line2}</p>
                            <p className='text-xs mt-1'>
                                <span className='text-sm text-neutral-700 font-medium'>Date & Time</span> 8, February, 2025 | 8:00 PM
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button className='text-sm text-stone-500 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                                Pay Online
                            </button>
                            <button className='text-sm text-stone-500 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
