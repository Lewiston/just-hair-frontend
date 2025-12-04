import React, { useState } from "react";
import stylist from "@/public/images/auth/service_provider.jpg";
import stars from "@/public/stars.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SecondaryButton from "../Buttons/SecondaryButton";
import Image from "next/image";

const HairStyleCard = () => {
  const [select, setSelect] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm overflow-clip">
      <Image src={stylist} alt="" className="h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-neutral-800">
              Knotless Braids
            </span>
            <p className="text-neutral-500 text-sm">Maria Rodriguez</p>
          </div>
          <div onClick={() => setSelect(!select)}>
            {select ? (
              <FaHeart className="tab-icon text-violet-500" />
            ) : (
              <FaRegHeart className="tab-icon text-neutral-400" />
            )}
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Image src={stars} alt="star rating" className="h-5 w-auto" />
          <p className="text-neutral-500 text-sm">4.5 (22 reviews)</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-black text-base text-violet-500">3500 XAF</span>
          <div className="flex gap-1 items-center">
            <FaLocationDot className="text-neutral-400 h-3 w-3" />
            <p className="text-neutral-500 text-sm">Bonduma Gate, Buea</p>
          </div>
        </div>
        <SecondaryButton label="Book Appointment" />
      </div>
    </div>
  );
};

export default HairStyleCard;
