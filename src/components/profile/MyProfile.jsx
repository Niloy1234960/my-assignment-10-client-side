import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import { ToastContainer, toast } from 'react-toastify';
const MyProfile = () => {
    const {user} = use(AuthContext)
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(user);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = () => {
    setEditMode(false);
           
      Swal.fire({
      title: "Successfull",
      icon: "success",
      draggable: true
});
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 p-5">

      <div className="w-full max-w-sm bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-center border border-white/40">

        
        <img
          src={profile.photo}
          className="w-28 h-28 rounded-full mx-auto shadow-lg border-4 border-white object-cover"
          alt="profile"
        />

        
        {editMode ? (
          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/70 outline-none"
              placeholder="Enter Name"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/70 outline-none"
              placeholder="Enter Email"
            />

            <input
              type="text"
              name="photo"
              value={profile.photo}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/70 outline-none"
              placeholder="Profile Image URL"
            />

            <button
              onClick={saveProfile}
              className="mt-3 px-5 py-2 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white  rounded-2xl hover:bg-green-700"
            >
              Save
            </button>
          </div>
        ) : (
         
          <>
            <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg">
              {profile.name}
            </h2>
            <p className="text-white/90 text-sm mt-1">{profile.email}</p>

            <button
              onClick={() => setEditMode(true)}
              className="mt-5 rounded-2xl px-5 py-2 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white  active:scale-95 transition"
            >
              Edit Profile
            </button>
           
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
