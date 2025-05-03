import DoctorCard from "@/components/DoctorCard";
import FilterSidebar from "@/components/FilterSidebar";
import RightHero from "@/components/RightHero";

// Define the shape of the doctor data (optional, for better type safety)
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

  // Add other fields as per your API response
}
interface DoctorCardProps {
  doctor: Doctor;
}
export default async function Home() {
  // Fetch data from the API
  const res = await fetch(
    "http://localhost:4020/doctor/getall?page=1&limit=20",
    {
      cache: "no-store", // Ensures fresh data on each request
    }
  );

  // Check if the response is okay, otherwise throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  // Parse the JSON response
  const data = await res.json();
  const doctors: Doctor[] = data.data || []; // Adjust based on your API response structure
  console.log(doctors)
  return (
    <main className="p-6 bg-white h-fit flex gap-6">
      <FilterSidebar />
      <div className="w-3xl flex flex-col gap-3">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
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
