import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SearchBar from "../SearchBar/searchBar";

const Navbar = () => {

  const [searchquery, setSearchquery] = React.useState("");


  const navigate = useNavigate(); // Initialize useNavigate hook

  const onLogout = () => {
    navigate("/login"); // Programmatically navigate to login page
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar />
      <ProfileInfo onLogOut={onLogout} /> {/* Use correct prop name onLogOut */}
    </div>
  );
};

export default Navbar;
