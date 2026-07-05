import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    province: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Student Registration Form
        </h2>

        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <input
          name="province"
          placeholder="Province"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
          required
        />

        <select
          name="course"
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded"
          required
        >
          <option value="">Select Course</option>
          <option value="React JS">React JS</option>
          <option value="Node JS">Node JS</option>
          <option value="Full Stack">Full Stack</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}