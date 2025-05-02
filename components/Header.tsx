import Link from "next/link";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <>
      <header className="border-b border-gray-200 py-2 bg-white fixed w-full top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-5 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://images.apollo247.in/images/icons/apollo247.svg"
                alt="Apollo 24/7 Logo"
                width={70}
                height={30}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between w-full ">
              {/* Location Selector */}
              <div className="flex-shrink-0 text-sm text-gray-700">
                <span className="flex items-center justify-center gap-1">
                  <span className=" text-xl">
                    <GrLocation />
                  </span>
                  <span className="flex-col flex">
                    <h6 className="text-xs">select location</h6>
                    Select Address ▼
                  </span>
                </span>
              </div>

              {/* Search Bar */}
              <div className="flex-1 relative  max-w-2/3">
                <input
                  type="text"
                  placeholder="Search Doctors, Specialties, Conditions etc."
                  className="w-full py-2 px-4 pl-10 border border-gray-200 bg-gray-100 text-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <LuSearch />
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex gap-5">
              <Link
                href="/buy-medicines"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Buy Medicines
              </Link>
              <Link
                href="/find-doctors"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Find Doctors
              </Link>
              <Link
                href="/lab-tests"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Lab Tests
              </Link>
              <Link
                href="/circle-membership"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Circle Membership
              </Link>
              <Link
                href="/health-records"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Health Records
              </Link>
              <Link
                href="/diabetes-reversal"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Diabetes Reversal
              </Link>
              <Link
                href="/buy-insurance"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Buy Insurance
                <span className="ml-1 bg-cyan-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </Link>
            </nav>
          </div>

          {/* Login Button */}
          <div className="flex-shrink-0">
            <button className="flex items-center text-md gap-2 border border-blue-500 rounded-lg px-4 py-2 hover:bg-gray-100 text-blue-500">
              Login
              <span className="text-2xl">
                <CgProfile />
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className="h-[72px]"></div> {/* Adjust height to match header */}
    </>
  );
}
