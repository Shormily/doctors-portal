import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';
import Footer from '../Footer/Footer';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div >
             <div className="bg-colors p-5">
        <h1 className="pt-32 text-5xl text-center text-white text-4xl">Appointments</h1>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e3a8a",
            height: "2px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
          className="max-w-[100px] m-auto"
        />
        <p className=" max-w-[2200px] p-3 m-auto text-[14px] text-white text-center justify-center items-center  ">
        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual
          <p className="mb-8">
          capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.


          </p>
        </p>
      </div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
            <Footer/>
        </div>
    );
};

export default Appointment;