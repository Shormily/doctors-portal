import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Navbar/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions'],
        queryFn: async () =>{
        const res =  await   fetch(`http://localhost:5000/v2/appoinmentOptions?date=${date}`)
        const data = await  res.json()
        return data
    }
    })

    if(isLoading){
        return<Loading/>
    }

    // useEffect o use kora jai but useQuery kora ta latest ba update
    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='my-16'>
            <h1 className='text-center  font-bold text-4xl'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption

                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;