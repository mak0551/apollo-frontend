import React from "react";

// Define filter interface to match page.tsx
interface Filters {
  mode: string[];
  experience: string[];
  fees: string[];
  language: string[];
  facility: string[];
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  return (
    <aside className="w-full max-w-xs p-4 pl-20 bg-white rounded-md space-y-6 h-[85vh] overflow-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={onClearFilters}
        >
          Clear All
        </button>
      </div>

      {/* Mode of Consult */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Mode of Consult</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.mode.includes("Hospital Visit")}
              onChange={() => onFilterChange("mode", "Hospital Visit")}
            />
            Hospital Visit
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.mode.includes("Online Consult")}
              onChange={() => onFilterChange("mode", "Online Consult")}
            />
            Online Consult
          </label>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Experience (In Years)</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.experience.includes("0-5")}
              onChange={() => onFilterChange("experience", "0-5")}
            />
            0-5
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.experience.includes("6-10")}
              onChange={() => onFilterChange("experience", "6-10")}
            />
            6-10
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.experience.includes("11-16")}
              onChange={() => onFilterChange("experience", "11-16")}
            />
            11-16
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.experience.includes("16-")}
              onChange={() => onFilterChange("experience", "16-")}
            />
            16+
          </label>
        </div>
      </div>

      {/* Fees */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Fees (In Rupees)</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.fees.includes("100-500")}
              onChange={() => onFilterChange("fees", "100-500")}
            />
            100-500
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.fees.includes("500-1000")}
              onChange={() => onFilterChange("fees", "500-1000")}
            />
            500-1000
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.fees.includes("1000-")}
              onChange={() => onFilterChange("fees", "1000-")}
            />
            1000+
          </label>
        </div>
      </div>

      {/* Language */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Language</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.language.includes("English")}
              onChange={() => onFilterChange("language", "English")}
            />
            English
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.language.includes("Hindi")}
              onChange={() => onFilterChange("language", "Hindi")}
            />
            Hindi
          </label>
        </div>
      </div>

      {/* Facility */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Facility</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.facility.includes("Apollo Hospital")}
              onChange={() => onFilterChange("facility", "Apollo Hospital")}
            />
            Apollo Hospital
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-700"
              checked={filters.facility.includes("Other Clinics")}
              onChange={() => onFilterChange("facility", "Other Clinics")}
            />
            Other Clinics
          </label>
        </div>
      </div>
    </aside>
  );
}