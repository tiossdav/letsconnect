import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { categories } from "../utils/data";

import logo from "../assets/logo.svg";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-sm text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 text-sm font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll w-60 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHome2Fill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base font-bold 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category?.image}
                alt="category"
                className="w-8 h-8 rounded-ful shadow-sm"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`/user-profile/${user._id}`}
          onClick={handleCloseSidebar}
          className="flex my-5 mb-3 gap-2 items-center rounded-lg shadow-lg bg-white p-2 mx-3"
        >
          <img
            src={user.image}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
