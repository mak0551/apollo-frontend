"use client";

import React, { useState, useEffect } from "react";
import DoctorCard from "@/components/DoctorCard";
import FilterSidebar from "@/components/FilterSidebar";
import RightHero from "@/components/RightHero";

// Define the shape of the doctor data
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
  languages?: string[]; // Added for language filter
  facility?: string; // Added for facility filter
}

// Define filter interface
interface Filters {
  mode: string[];
  experience: string[];
  fees: string[];
  language: string[];
  facility: string[];
}

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [filters, setFilters] = useState<Filters>({
    mode: ["Hospital Visit", "Online Consult"],
    experience: [],
    fees: [],
    language: [],
    facility: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch doctors on mount
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch(
          "http://localhost:4020/doctor/getall?page=1&limit=20",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await res.json();
        const fetchedDoctors: Doctor[] = data.data || [];
        setDoctors(fetchedDoctors);
        setFilteredDoctors(fetchedDoctors);
        setLoading(false);
      } catch (err) {
        setError("Failed to load doctors. Please try again.");
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  // Apply filters whenever doctors or filters change
  useEffect(() => {
    let result = [...doctors];

    // Mode of Consult
    if (filters.mode.length > 0 && filters.mode.length < 2) {
      result = result.filter((doctor) => {
        if (filters.mode.includes("Hospital Visit")) {
          return doctor.availability.in_person > 0;
        }
        if (filters.mode.includes("Online Consult")) {
          return doctor.availability.online > 0;
        }
        return true;
      });
    }

    // Experience
    if (filters.experience.length > 0) {
      result = result.filter((doctor) => {
        return filters.experience.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return (
            doctor.experience_years >= min &&
            (max ? doctor.experience_years <= max : true)
          );
        });
      });
    }

    // Fees
    if (filters.fees.length > 0) {
      result = result.filter((doctor) => {
        return filters.fees.some((range) => {
          const [min, max] = range.split("-").map(Number);
          const fee = Math.min(
            doctor.consultation_fees.online,
            doctor.consultation_fees.in_person
          );
          return fee >= min && (max ? fee <= max : true);
        });
      });
    }

    // Language
    if (filters.language.length > 0) {
      result = result.filter((doctor) =>
        filters.language.every((lang) =>
          doctor.languages?.includes(lang)
        )
      );
    }

    // Facility
    if (filters.facility.length > 0) {
      result = result.filter((doctor) =>
        filters.facility.includes(doctor.facility || doctor.clinic_name)
      );
    }

    setFilteredDoctors(result);
  }, [doctors, filters]);

  // Handle filter changes
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [filterType]: newValues };
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      mode: ["Hospital Visit", "Online Consult"],
      experience: [],
      fees: [],
      language: [],
      facility: [],
    });
  };

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="p-6 bg-white h-fit flex gap-6">
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <div className="w-3xl flex flex-col gap-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
      <RightHero />
    </main>
  );
}