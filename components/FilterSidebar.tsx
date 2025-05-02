import React from "react";

export default function FilterSidebar() {
  return (
    <aside className="w-full max-w-xs p-4 pl-20 bg-white rounded-md space-y-6 h-[85vh] overflow-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="text-sm text-blue-600 hover:underline">Clear All</button>
      </div>

      <button className="w-full text-blue-700 border border-blue-700 py-2 rounded-md text-sm font-medium">
        Show Doctors Near Me
      </button>

      {/* Mode of Consult */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Mode of Consult</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" defaultChecked />
            Hospital Visit
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" defaultChecked />
            Online Consult
          </label>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Experience (In Years)</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            0-5
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            6-10
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            11-16
          </label>
          <p className="text-blue-700 text-sm cursor-pointer">+1 More</p>
        </div>
      </div>

      {/* Fees */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Fees (In Rupees)</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            100-500
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            500-1000
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            1000+
          </label>
        </div>
      </div>

      {/* Language */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Language</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            English
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            Hindi
          </label>
        </div>
      </div>
      {/* facility */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Facility</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            Apollo Hospital
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-700" />
            Other Clinics
          </label>
        </div>
      </div>
    </aside>
  );
}
