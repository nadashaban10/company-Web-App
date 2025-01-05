import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import Contactimg from "../images/Contact1.png";
import RegistrationPopup from "./RegisterPopup";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref);

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
      setError("حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى.");
      setIsPopupOpen(false); // Do not show popup if there is an error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="contact h-full w-[100%] flex flex-col lg:flex-row my-5">
      {/* Image Section (Hidden on small screens) */}
      <div className="rightSection items-center justify-center flex-1 bg-white rounded-br-[50%] rounded-tl-[50%] py-12 hidden lg:block">
        <motion.img
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          ref={ref}
          src={Contactimg}
          loading="lazy"
          height={500}
          width={500}
          alt="اتصل بنا"
          className="rounded-xl w-[600px] pt-[90px] h-auto pr-10"
          role="img"
          aria-label="Image showing contact us"
        />
      </div>

      {/* Form Section */}
      <div className="leftSection flex items-center justify-center flex-1 mt-5 px-5 sm:w-[95%] md:w-[85%] mx-auto w-[100%]">
        <div className="w-full flex flex-col gap-5 bg-gray-50 bg-opacity-[90%] p-12 rounded-xl">
          <h2 className="cTitle text-3xl font-bold text-[rgba(38,89,97,1)]">
             تواصل معنا!
          </h2>
          
          {/* Error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <form onSubmit={handleRegisterClick} className="bg-white">
            <div className="mb-6 relative">
              <FaUser className="absolute left-3 top-3 text-black" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(68,116,124,1)] transition-colors"
                placeholder="الاسم"
              />
            </div>

            <div className="mb-6 relative">
              <FaEnvelope className="absolute left-3 top-3 text-black" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-10 py-3 border border-gray-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-focus:ring-[rgba(68,116,124,1)] transition-colors"
                placeholder="البريد الإلكتروني"
              />
            </div>

            <div className="mb-6 relative">
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ringfocus:ring-[rgba(68,116,124,1)] transition-colors"
                placeholder="الدولة"
              />
            </div>

            <div className="mb-6 relative">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(68,116,124,1)]  transition-colors"
                placeholder="رقم الهاتف"
              />
            </div>

            <div className="mb-6 relative">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(68,116,124,1)] transition-colors"
                placeholder="العمر"
              />
            </div>

            <div className="mb-6 relative hidden">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-10 py-3 border border-gray-600 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(68,116,124,1)] -colors"
              >
                <option value="" disabled>
                  اختر الجنس
                </option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
                <option value="other">آخر</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[rgba(38,89,97,1)] text-white hover:bg-[rgba(68,116,124,1)]  font-semibold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
              disabled={loading} // Disable button while loading
            >
              {loading ? "جاري التحميل..." : "سجل الآن!"}
            </button>
          </form>

          {/* Registration Popup */}
          <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
