import DoctorCard from "@/components/DoctorCard";
import FilterSidebar from "@/components/FilterSidebar";
import RightHero from "@/components/RightHero";

export default function Home() {
  return (
    <main className="p-6 bg-white min-h-screen flex gap-6">
      <FilterSidebar />
      <DoctorCard />
      <RightHero/>
    </main>
  );
}
