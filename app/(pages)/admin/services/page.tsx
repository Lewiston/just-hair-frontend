"user client";

import React from "react";
import PendingAppointmentCard from "@/app/components/AppointmentCards/PendingAppointmentCard";
import CompleteAppointmentCard from "@/app/components/AppointmentCards/CompleteAppointmentCard";
import CancelledAppointmentCard from "@/app/components/AppointmentCards/CancelledAppointmentCard";
import RescheduledAppointmentCard from "@/app/components/AppointmentCards/RescheduledAppointmentCard";
import UserAppointmentOverview from "@/app/components/AppointmentOverview/UserAppointmentOverview";
import UserWeeklyAppointment from "@/app/components/AppointmentOverview/UserWeeklyAppointment";
import QuickActions from "@/app/components/AppointmentOverview/QuickActions";

const AdminServices = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <div className="flex flex-col">
        <h1 className="text-base font-medium text-neutral-600">
          Appointments Rundown
        </h1>
        <p className="text-sm text-neutral-500">
          See upcoming appointments and the ones past
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-6">
        {/* Left hand side*/}
        <div className="flex flex-col gap-6 w-full">
          {/* Schedules forth coming */}
          <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
            {/* Heading */}
            <h2 className="text-neutral-800 font-medium text-2xl">
              Upcoming Appointments
            </h2>

            {/* Schedule list */}
            <div className="flex flex-col gap-6">
              <PendingAppointmentCard />
              <RescheduledAppointmentCard />
              <PendingAppointmentCard />
            </div>
          </div>

          {/* Schedules Past */}
          <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
            {/* Heading */}
            <h2 className="text-neutral-800 font-medium text-2xl">
              Past Appointments
            </h2>

            {/* Schedule list */}
            <div className="flex flex-col gap-6">
              <CompleteAppointmentCard />
              <CancelledAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
              <CancelledAppointmentCard />
              <CompleteAppointmentCard />
              <CompleteAppointmentCard />
            </div>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col gap-6 min-w-fit">
          <UserAppointmentOverview />
          <UserWeeklyAppointment />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
