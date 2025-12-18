"use client";

import React, { useState } from "react";
import profile_image from "@/public/profile.jpg";
import { MdPhotoCamera } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import TertiaryButton from "../../../components/Buttons/TertiaryButton";
import Image from "next/image";

const AdminProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        {/* Page title */}
        <h1 className="text-base font-medium text-neutral-600">
          Profile Settings
        </h1>
        <p className="text-sm text-neutral-500">Customize your profile</p>
      </div>

      {/* User setting details */}
      <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col gap-6 rounded-2xl">
        {/* Heading */}
        <h2 className="text-neutral-800 font-medium text-2xl">
          Basic Information
        </h2>

        {/* Photo settings */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative h-fit w-fit">
            <Image
              src={profile_image}
              alt=""
              className="h-24 w-24 rounded-full"
            />
            <div className="bg-violet-500 p-2 absolute bottom-0 right-0 rounded-full">
              <MdPhotoCamera className="text-neutral-50 h-3 w-3" />
              <input
                type="file"
                accept="image/*"
                name="profile-photo"
                id=""
                className="opacity-0 w-full absolute top-0 left-0 z-5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-neutral-700 font-semibold">Profile Photo</h3>
            <p className="text-sm text-neutral-600">
              Update your profile picture. Recommended size: 400x400px
            </p>
            <div className="flex items-center gap-8">
              <div className="text-neutral-800 border border-neutral-300 px-3 py-2 rounded-md relative hover:bg-violet-100 hover:border-violet-300 hover:text-violet-700 cursor-pointer transition duration-400 ease-in-out">
                <p>Upload new</p>
                <input
                  type="file"
                  accept="image/*"
                  name="profile-photo"
                  id=""
                  className="opacity-0 w-full absolute top-0 left-0 z-5"
                />
              </div>
              <button className="text-red-700 hover:scale-[1.05] font-semibold cursor-pointer transition duration-400 ease-in-out">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Name settings */}
        <div className="flex flex-col md:flex-row gap-4 items-start w-full">
          {/* Surname */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="surname" className="font-semibold text-neutral-700">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              id=""
              value="Madison"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            />
          </div>

          {/* Given name */}
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="given_name"
              className="font-semibold text-neutral-700"
            >
              Given Name
            </label>
            <input
              type="text"
              name="given_name"
              id=""
              value="Janette"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            />
          </div>
        </div>

        {/* Location & Hair Type */}
        <div className="flex flex-col md:flex-row gap-4 items-start w-full">
          {/* Location & Telephone */}
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="location"
              className="font-semibold text-neutral-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id=""
              value="Small Soppo"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            />
          </div>
          {/* Telephone */}
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="telephone"
              className="font-semibold text-neutral-700"
            >
              Telephone
            </label>
            <input
              type="tel"
              name="telephone"
              id=""
              value="123456789"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            />
          </div>
        </div>

        {/* Email and Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start w-full">
          {/* Email */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="font-semibold text-neutral-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id=""
              value="abc@xyz.com"
              className="outline-none px-3 py-2 border border-neutral-200 rounded-md focus:border-violet-300"
              disabled
            />
          </div>
          {/* Passord */}
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="password"
              className="font-semibold text-neutral-700"
            >
              Password
            </label>
            <div className="w-full flex gap-2 border py-2 px-3 items-center justify-between border-neutral-200 rounded-md  focus-within:border-violet-300">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value="password"
                className="w-full outline-none"
                disabled
              />
              {showPassword ? (
                <FaEyeSlash
                  className="h-5 w-5 text-neutral-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="h-5 w-5 text-neutral-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-end">
          <TertiaryButton label="Update" />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
