import React from "react";
import "./pagination.css";

const Pagination = ({
  totalUsers,
  usersPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center justify-center">
      <button
        className={`bg-neutral-200 py-2 px-4 mx-1 cursor-pointer rounded-sm h-8 flex justify-center items-center hover:bg-violet-500 hover:text-white disabled:opacity-50`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={`bg-neutral-200 p-2 mx-1 cursor-pointer rounded-sm h-8 w-8 flex justify-center items-center hover:bg-violet-500 hover:text-white ${
            page == currentPage ? "bg-violet-500 text-white" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`bg-neutral-200 py-2 px-4 mx-1 cursor-pointer rounded-sm h-8 flex justify-center items-center hover:bg-violet-500 hover:text-white disabled:opacity-50`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
