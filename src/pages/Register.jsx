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


    const registrationData = {
      ...formData,

      clerkUserId: user.id,
      clerkName: user.fullName,
      clerkEmail: user.emailAddresses[0].emailAddress,
    };


    console.log("Registration Data:", registrationData);


    alert("Registration Submitted Successfully!");
  };


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-2xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8"
        >

          <h2 className="text-3xl font-bold text-center mb-8">
            Student Registration Form
          </h2>


          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />


          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp Number"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />


          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />


          <input
            type="text"
            name="province"
            placeholder="Province"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />


          <select
            name="course"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-6"
            required
          >

            <option value="">
              Select Course
            </option>

            <option value="React JS">
              React JS
            </option>

            <option value="Tailwind CSS">
              Tailwind CSS
            </option>

            <option value="Node.js Backend">
              Node.js Backend
            </option>

          </select>



          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">

            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Registration Fee
            </h3>


            <p>
              Registration Fee:
              <span className="font-bold text-red-600">
                {" "}1000 PKR
              </span>
            </p>


            <p>
              <strong>Account Title:</strong> SoftNova Academy
            </p>


            <p>
              <strong>Bank Name:</strong> Meezan Bank
            </p>


            <p>
              <strong>Account Number:</strong> 03XX-XXXXXXX
            </p>


            <div className="mt-4 p-3 rounded bg-yellow-100 border border-yellow-300">

              <p className="text-sm text-gray-700">
                After paying the registration fee, please upload your payment
                screenshot below.
              </p>

            </div>

          </div>



          <div className="mb-6">

            <label className="block font-semibold mb-2">
              Upload Payment Screenshot
            </label>


            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

          </div>



          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
          >

            Submit Registration

          </button>


        </form>

      </div>

    </div>
  );
}