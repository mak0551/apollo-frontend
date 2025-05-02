import Image from "next/image";
import React from "react";

export default function DoctorCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      {/* Left - Doctor Info */}
      <div className="flex items-start gap-4 w-full md:w-2/3">
        {/* Doctor Image */}
        <div className="min-w-[64px] h-[64px] relative rounded-full overflow-hidden border">
          <Image
            src="/doctor.jpg" // Replace with actual path or use static asset
            alt="Dr. Utsa Basu"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-black">
            Dr. Utsa Basu 
          </h2>
          <p className="text-sm text-gray-600">Diabetologist</p>
          <p className="text-purple-600 text-sm font-medium">
            14 YEARS • MBBS, MD
          </p>
          <p className="text-sm text-gray-600">Dr Utsa Basu Clinic, Kolkata</p>
          <p className="text-sm text-green-600 font-semibold flex items-center">
            👍 97% <span className="text-gray-500 ml-1">(350+ Patients)</span>
          </p>
        </div>
      </div>

      {/* Right - Pricing and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full">
        <div className="text-center flex flex-col gap-6 text-xs w-full">
          <p className="font-bold text-black text-lg">₹500</p>
          <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded-md text-sm">
            Consult Online
            <br />
            <span className="text-xs text-gray-500">Available in 1 minute</span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-6 text-xs w-full">
          <p className="font-bold text-black text-lg">₹1000</p>
          <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm">
            Visit Doctor
            <br />
            <span className="text-xs text-white">Available in 56 minutes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
