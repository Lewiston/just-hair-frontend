import React from "react";

const SummaryCard = ({
  title = "Title",
  value = "Value",
  bgColor = "bg-blue-100",
  iconColor = "text-blue-700",
  icon,
}: {
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-6 flex flex-col text-center justify-center items-center gap-2 rounded-2xl border border-neutral-200 bg-white">
      {/* Stats */}
      <div className="flex flex-col gap-4">
        {/* Expense Stats */}
        <div className="flex gap-4 items-center">
          <div className={`p-3 rounded-md ${bgColor} ${iconColor}`}>{icon}</div>

          <span className={`font-bold text-3xl ${iconColor}`}>{value}</span>
        </div>
      </div>
      <h3 className="text-sm text-neutral-400">{title}</h3>
    </div>
  );
};

export default SummaryCard;
