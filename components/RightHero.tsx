import React from "react";

function RightHero() {
  return (
    <div>
      <div className="h-55 w-50 rounded-2xl bg-blue-950 text-white px-4 text-sm flex-col flex gap-2">
        <img
          src="https://images.apollo247.in/images/doctor-listing/consult_doctor.png?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
          alt=""
          className="h-2/5 py-2"
        />
        <div className="flex-col flex gap-2 font-semibold mr-2">
          <h2>Need help consult the right doctor?</h2>
          <span className="underline text-xs">
            Call +91-8040245807 to book instantly
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightHero;
