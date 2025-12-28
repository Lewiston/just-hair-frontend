"use client";

import Pagination from "@/app/components/Pagination/Pagination";
import { useState } from "react";
import UsersListView from "@/app/components/ListView/UsersListView";
import "./clientsStylists.css";

const ClientsAndStylists = () => {
  // State for user data and pagination
  // const [userData, setUserData] = useState([]);
  const userData = [
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
    <UsersListView />,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);

  // Calculate indices for pagination
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = userData.slice(firstUserIndex, lastUserIndex);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        {/* Page title */}
        <h1 className="text-base font-medium text-neutral-600">Clients</h1>
        <p className="text-sm text-neutral-500">Manage clients</p>
      </div>

      <div className="bg-neutral-50 border border-neutral-200 py-6 flex flex-col gap-6 rounded-2xl min-w-full w-fit">
        {/* Heading */}
        <h2 className="text-neutral-800 font-medium text-2xl pl-6">
          Client List
        </h2>

        <div className="flex flex-col user-list ">
          <div className="flex items-center gap-10 px-6 pt-4 pb-2 border-t-2 border-neutral-100">
            <p className="w-10 font-medium text-neutral-800"></p>
            <p className="w-50 font-medium text-neutral-800">Surname</p>
            <p className="w-80 font-medium text-neutral-800">Given Names</p>
            <p className="w-80 font-medium text-neutral-800">Location</p>
            <p className="w-40 font-medium text-neutral-800">Email</p>
            <p className="w-32 font-medium text-neutral-800">Phone Number</p>

            <p className="w-10 font-medium text-neutral-800">Action</p>
          </div>
          {currentUsers.map((user) => (
            <li className="list-none">{user}</li>
          ))}
        </div>
        <Pagination
          totalUsers={userData.length}
          usersPerPage={usersPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ClientsAndStylists;
