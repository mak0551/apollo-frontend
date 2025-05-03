// components/DoctorCard.tsx
import Image from "next/image";
import React from "react";

// Define the Doctor interface (can be moved to a shared types file)
interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience_years: number;
  qualifications: string;
  location: string;
  clinic_name: string;
  rating: {
    percentage: number;
    reviews_count: number;
  };
  consultation_fees: {
    online: number;
    in_person: number;
  };
  availability: {
    online: number;
    in_person: number;
  };
  image?: string;
}

// Define the props type for DoctorCard
interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg max-w-3xl w-full h-fit">
      {/* Left - Doctor Info */}
      <div className="flex items-start gap-4 w-full md:w-2/3">
        {/* Doctor Image */}
        <div className="min-w-[64px] h-[64px] relative rounded-full overflow-hidden">
          <Image
            src="/profile.jpg" // Use doctor's image if available, else fallback
            // src={doctor?.image || "/profile.jpg"} // Use doctor's image if available, else fallback
            alt={doctor?.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full "
          />
        </div>

        {/* Details */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-black">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.specialization}</p>
          <p className="text-purple-600 text-sm font-medium">
            {doctor.experience_years} YEARS • {doctor.qualifications || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            {doctor.clinic_name || "Clinic not specified"} | {doctor.location}
          </p>
          <p className="text-sm text-green-600 font-semibold flex items-center">
            👍 {doctor.rating?.percentage ?? "N/A"}%
            <span className="text-gray-500 ml-1">
              ({doctor.rating?.reviews_count ?? 0}+ Patients)
            </span>
          </p>
        </div>
      </div>

      {/* Right - Pricing and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full">
        <div className="text-center flex flex-col gap-6 text-xs w-full">
          <p className="font-bold text-black text-lg">
            ₹{doctor?.consultation_fees?.online}
          </p>
          <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded-md text-sm">
            Consult Online
            <br />
            <span className="text-xs text-gray-500">
              Available in {doctor.availability.online} minute
            </span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-6 text-xs w-full">
          <p className="font-bold text-black text-lg">
            ₹{doctor?.consultation_fees?.in_person}
          </p>{" "}
          {/* Example: Double the fees for in-person visit */}
          <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm">
            Visit Doctor
            <br />
            <span className="text-xs text-white">
              Available in {doctor.availability.in_person} minutes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
