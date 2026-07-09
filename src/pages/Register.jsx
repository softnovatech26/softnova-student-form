// Register.jsx
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export default function Register() {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    province: "",
    course: "",
    paymentScreenshot: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        paymentScreenshot: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const registrationData = {
      ...formData,
      clerkUserId: user.id,
      clerkName: user.fullName,
      clerkEmail: user.emailAddresses[0].emailAddress,
    };

    console.log("Registration Data:", registrationData);

    setTimeout(() => {
      alert("Registration Submitted Successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-4 relative overflow-hidden">
      {/* Animated Background - Red Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="animate-fadeInUp">
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-[#1f1f1f] shadow-2xl rounded-2xl p-8 transition-all duration-500 hover:border-red-500/30 hover:shadow-red-500/5"
          >
            <div className="relative mb-10">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-red-600/20 rounded-full blur-xl animate-pulse delay-700"></div>
              <h2 className="text-4xl font-bold text-center text-white">
                Student Registration
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
              <p className="text-center text-gray-500 mt-2 text-sm">
                SoftNova Academy today
              </p>
            </div>

            <div className="space-y-5">
              <div className="group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                  required
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                  required
                />
              </div>

              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp Number"
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                    required
                  />
                </div>

                <div className="group">
                  <input
                    type="text"
                    name="province"
                    placeholder="Province"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                    required
                  />
                </div>
              </div>

              <div className="group relative">
                <select
                  name="course"
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 appearance-none cursor-pointer group-hover:shadow-lg group-hover:shadow-red-500/5"
                  required
                >
                  <option value="" className="bg-[#111]">
                    Select Course
                  </option>
                  <option value="React JS" className="bg-[#111]">
                    React JS
                  </option>
                  <option value="Tailwind CSS" className="bg-[#111]">
                    Tailwind CSS
                  </option>
                  <option value="Node.js Backend" className="bg-[#111]">
                    Node.js Backend
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-600/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 group-hover:border-red-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1.5V10m0 4.5V15m0 1.5V17m0-1.5v-1M12 8v1m0 3.5V15m0 3.5V17m0-1.5V16m0-4.5V12"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Registration Fee
                    </h3>
                  </div>

                  <div className="space-y-3 text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">Registration Fee:</span>
                      <span className="font-bold text-2xl text-red-500 group-hover:text-red-400 transition-colors duration-300">
                        1000 PKR
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">Account Title:</span>
                      <span className="font-semibold text-white">SoftNova Academy</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">Bank Name:</span>
                      <span className="font-semibold text-white">Meezan Bank</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">Account Number:</span>
                      <span className="font-semibold text-white font-mono">03XX-XXXXXXX</span>
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-red-600/5 border border-red-600/10 rounded-lg group-hover:border-red-600/20 transition-all duration-300">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      After paying the registration fee, please upload your payment screenshot below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Upload Payment Screenshot
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-600/10 file:text-red-500 hover:file:bg-red-600/20 file:transition-all file:duration-300 cursor-pointer focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-8 relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/20 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}