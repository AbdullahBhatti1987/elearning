import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-full mx-auto darkColor shadow-none ">
      <Navbar
        rounded
        className="lg:w-[90%] flex mx-auto justify-between items-center darkColor"
      >
        <Navbar.Brand>
          <Link to={"/"} className="flex items-center">
            <div className="absolute border-2 logoColor ms-1 rotate-45 -z-1 w-10 h-10 rounded-lg"></div>
            <span className="self-center text-xl font-bold text-white tracking-widest  z-10 ps-3">
              TOTC
            </span>
          </Link>
        </Navbar.Brand>

        <div className="flex ">
          {isLogin && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="">
          <Navbar.Link className="h-full flex justify-center items-center">
            <Link to={"/"} className="text-white">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link className="h-full flex justify-center items-center">
            <Link to={"/courses"} className="text-white">Courses</Link>
          </Navbar.Link>
          <Navbar.Link className="h-full flex justify-center items-center">
            <Link to={"/careers"} className="text-white">Careers</Link>
          </Navbar.Link>
          <Navbar.Link className="h-full flex justify-center items-center">
            <Link to={"/blogpage"} className="text-white">Blog</Link>
          </Navbar.Link>
          <Navbar.Link className="h-full flex justify-center items-center">
            <Link to={"/about"} className="text-white">About</Link>
          </Navbar.Link>

          <Navbar.Link className="lg:hidden md:hidden">
            <Link>Signin</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link className="lg:hidden md:hidden">Register</Link>
          </Navbar.Link>

          <div className="lg:flex md:flex hidden gap-3">
            <Link to={"signin"}>
              <Button
                title={"Login"}
                className={"darkText bg-slate-100 "}
              />
            </Link>
            <Link to={"register"}>
              <Button title={"Signup"} className={"lightColor text-white"} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
