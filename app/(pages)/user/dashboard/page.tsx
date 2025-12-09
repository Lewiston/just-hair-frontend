"user client";

import SummaryCard from "@/app/components/SummaryCard/SummaryCard";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { PiScissorsFill } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import PendingAppointmentCard from "@/app/components/AppointmentCards/PendingAppointmentCard";
import RescheduledAppointmentCard from "@/app/components/AppointmentCards/RescheduledAppointmentCard";

const UserDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Important Stats */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <SummaryCard
          title="Total Expense"
          value="27500 XAF"
          bgColor="bg-emerald-100"
          iconColor="text-emerald-700"
          icon={<GrMoney className="tab-icon" />}
        />
        <SummaryCard
          title="Upcoming Appointments"
          value="3"
          bgColor="bg-purple-100"
          iconColor="text-purple-700"
          icon={<FaCalendarCheck className="tab-icon" />}
        />
        <SummaryCard
          title="Reviews"
          value="21"
          bgColor="bg-rose-100"
          iconColor="text-rose-700"
          icon={<MdRateReview className="tab-icon" />}
        />
        <SummaryCard
          title="Favorite Hairstyles"
          value="3"
          bgColor="bg-fuchsia-100"
          iconColor="text-fuchsia-700"
          icon={<PiScissorsFill className="tab-icon" />}
        />
        <SummaryCard
          title="Favorite Stylists"
          value="3"
          bgColor="bg-orange-100"
          iconColor="text-orange-700"
          icon={<FaPersonCircleCheck className="tab-icon" />}
        />
      </div>

      {/* Upcoming appointments */}
      <div className="flex gap-6">
        {/* Schedules forth coming */}
        <div className="bg-white border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
          {/* Heading */}
          <h2 className="text-neutral-800 font-medium text-2xl">
            Appointments
          </h2>

          {/* Schedule list */}
          <div className="flex flex-col gap-6">
            <PendingAppointmentCard />
            <RescheduledAppointmentCard />
            <PendingAppointmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
