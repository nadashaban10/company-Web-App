import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RegistrationPopup from "./RegisterPopup";
import NavBar from "./NavBar";
import Footer from "./Footer";
import virtualreality from "../../public/images/virtual-reality-in-Education-.jpg";

const Register = ({ handleLoginOpen }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state
  const [loading, setLoading] = useState(false); // Loading state

  const handleRegisterClick = (e) => {
    e.preventDefault();
    fetchRegisterUser(name, email, country, phone, age, gender);
  };

  const fetchRegisterUser = async (
    name,
    email,
    country,
    phone,
    age,
    gender
  ) => {
    setLoading(true); // Set loading state
    try {
      const response = await fetch(
        "https://student-app-backend-nine.vercel.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, country, phone, age, gender }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setIsPopupOpen(true); // Show popup on successful registration
        setError(null); // Clear any previous errors
      } else {
        console.error("Registration failed:", data.errors || data.message);
        setError(data.errors || data.message);
        setIsPopupOpen(false); // Do not show popup if registration failed
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error during registration. Please try again.");
      setIsPopupOpen(false); // Do not show popup if there is an error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <NavBar />
      <div
        className="h-full flex items-center w-full justify-center mt-[100px] rtl"
        style={{ backgroundImage: `url(${virtualreality})`, opacity: "95%" }}
      >
        <div className="py-3 px-5 max-w-lg w-full bg-white my-5">
          <h2 className="text-3xl font-bold text-center text-[#254466] mb-">
            Join Us!
          </h2>
          <p className="text-gray-400 p-2">
            Please enter your details to create an account. We will connect with
            you when the project launches.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleRegisterClick} className="bg-white">
            <div className="mb-6 relative">
              <FaUser className="absolute left-3 top-3 text-black" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                placeholder="Name"
              />
            </div>

            <div className="mb-6 relative">
              <FaEnvelope className="absolute left-3 top-3 text-black" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-10 py-3 border border-gray-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                placeholder="Email"
              />
            </div>

            <div className="mb-6 relative">
              <FaLock className="absolute left-3 top-3 text-black" />
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                placeholder="Country"
              />
            </div>
            <div className="mb-6 relative">
              <FaLock className="absolute left-3 top-3 text-black" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
                placeholder="Phone"
              />
            </div>
            <div className="mb-6 relative">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors "
                placeholder="Age"
              />
            </div>
            <div className="mb-6 relative">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A76D1] transition-colors"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A76D1] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#1A76D1] transition duration-300 ease-in-out"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Join Now!"}
            </button>
          </form>

          {/* Registration Popup */}
          <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
