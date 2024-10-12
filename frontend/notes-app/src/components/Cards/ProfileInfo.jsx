import React, { useMemo } from "react";
import { getInitials } from "../../utils/helper"; // Ensure this path is correct

const ProfileInfo = ({ name = "John William", onLogOut }) => {
  // Memoize the initials to avoid recalculating unless 'name' changes
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <div className="flex items-center gap-3" aria-label="Profile Information">
      {/* Circle with initials */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100"
        aria-label={`Profile initials: ${initials}`}
      >
        {initials}
      </div>

      {/* Profile name and logout button */}
      <div>
        <p className="text-sm font-medium" aria-label={`User name: ${name}`}>
          {name}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={onLogOut}
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
