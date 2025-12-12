import React from "react";

const UserWeeklyAppointment = () => {
  return (
    <div className="p-6 flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white h-fit min-w-fit">
      <h3 className="text-2xl text-neutral-800 font-medium">This Week</h3>
      {/* Stats */}
      <div className="flex flex-col gap-4">
        {/* Monday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Monday</p>
          <span className="font-medium text-neutral-800">
            0 appointement(s)
          </span>
        </div>

        {/* Tuesday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Tuesday</p>
          <span className="font-medium text-neutral-800">
            1 appointement(s)
          </span>
        </div>

        {/* Wednesday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Wednesday</p>
          <span className="font-medium text-neutral-800">
            0 appointement(s)
          </span>
        </div>

        {/* Thursday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Thursday</p>
          <span className="font-medium text-neutral-800">
            0 appointement(s)
          </span>
        </div>

        {/* Friday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Friday</p>
          <span className="font-medium text-neutral-800">
            2 appointement(s)
          </span>
        </div>

        {/* Saturday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Saturday</p>
          <span className="font-medium text-neutral-800">
            0 appointement(s)
          </span>
        </div>

        {/* Sunday */}
        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500">Sunday</p>
          <span className="font-medium text-neutral-800">
            0 appointement(s)
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserWeeklyAppointment;
