import axios from "axios";
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

    console.log("Selected File:", e.target.files[0]);

    setFormData({
      ...formData,
      paymentScreenshot: e.target.files[0],
    });

  } else  {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsSubmitting(true);


   const data = new FormData();

data.append("fullName", formData.fullName);
data.append("email", formData.email);
data.append("phone", formData.phone);
data.append("city", formData.city);
data.append("province", formData.province);
data.append("course", formData.course);

data.append("clerkUserId", user.id);
data.append("clerkName", user.fullName);
data.append("clerkEmail", user.emailAddresses[0].emailAddress);
data.append("paymentScreenshot", formData.paymentScreenshot);


try {

  const response = await axios.post(
    '${process.env.VITE_API_URL}/api/register',
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  alert(response.data.message);

} catch (error) {

  console.log(error);

  alert("Registration failed");

} finally {

  setIsSubmitting(false);

}

};



  return (

    <div className="relative min-h-screen bg-black px-4 py-12 overflow-hidden">


      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]"></div>

      </div>



      <div className="relative z-10 max-w-4xl mx-auto">



        {/* Heading */}

        <div className="text-center mb-10">


          <span className="inline-block px-5 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-sm mb-5">

            🎓 SoftNova Academy Admission

          </span>


          <h1 className="text-4xl md:text-5xl font-bold text-white">

            Student Registration

            <span className="text-red-500">

              {" "}Form

            </span>

          </h1>


          <p className="text-gray-400 mt-4">

            Fill the form below to start your learning journey.

          </p>


        </div>




        {/* Form Card */}

        <form
          onSubmit={handleSubmit}
          className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >



          {/* Personal Information */}

          <h2 className="text-xl font-semibold text-white mb-6 border-l-4 border-red-500 pl-3">

            Personal Information

          </h2>



          <div className="grid md:grid-cols-2 gap-5">


            <div>

              <label className="text-gray-400 text-sm">
                Full Name
              </label>

              <input

                type="text"

                name="fullName"

                placeholder="Enter your full name"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              />

            </div>



            <div>

              <label className="text-gray-400 text-sm">
                Email Address
              </label>

              <input

                type="email"

                name="email"

                placeholder="Enter email address"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              />

            </div>



            <div>

              <label className="text-gray-400 text-sm">
                WhatsApp Number
              </label>

              <input

                type="tel"

                name="phone"

                placeholder="03XX XXXXXXX"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              />

            </div>



            <div>

              <label className="text-gray-400 text-sm">
                City
              </label>

              <input

                type="text"

                name="city"

                placeholder="Your city"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              />

            </div>


          </div>
          
          {/* Location + Course */}

          <div className="grid md:grid-cols-2 gap-5 mt-6">


            <div>

              <label className="text-gray-400 text-sm">
                Province
              </label>

              <input

                type="text"

                name="province"

                placeholder="Your province"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              />

            </div>



            <div>

              <label className="text-gray-400 text-sm">
                Select Course
              </label>


              <select

                name="course"

                onChange={handleChange}

                required

                className="mt-2 w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"

              >

                <option value="">
                  Choose your course
                </option>

                <option value="HTML CSS JavaScript Course">
                  Complete HTML, CSS and JavaScript Course
                </option>


                <option value="Python Data Science">
                  Python for Data Science Course
                </option>


                <option value="React JS Development">
                  React.js Development Course
                </option>


                <option value="Tailwind CSS Development">
                  Tailwind CSS Development Course
                </option>


                <option value="Artificial Intelligence">
                  Artificial Intelligence Course
                </option>


                <option value="React Native Development">
                  React Native App Development Course
                </option>


              </select>


            </div>


          </div>



{/* Fee Card */}

<div className="mt-10 bg-gradient-to-br from-red-600/20 to-black border border-red-500/30 rounded-2xl p-6">

  <div className="flex items-center gap-3 mb-5">
    <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center text-2xl">
      💳
    </div>

    <div>
      <h3 className="text-xl font-bold text-white">
        Registration Fee
      </h3>

      <p className="text-gray-400 text-sm">
        Complete payment before submission
      </p>
    </div>
  </div>

  <div className="space-y-4 text-gray-300">

    {/* Registration Fee */}
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
      <span className="font-medium">
        Registration Fee
      </span>

      <span className="text-2xl font-bold text-red-500 text-left sm:text-right">
        1000 PKR
      </span>
    </div>

    {/* Account Title */}
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
      <span className="font-medium">
        Account Title
      </span>

      <span className="text-white font-semibold text-left sm:text-right leading-relaxed">
        Haseeb Ul Hassan
        <br />
        Founder SoftNova Academy
      </span>
    </div>

    {/* Bank Name */}
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
      <span className="font-medium">
        Bank Name
      </span>

      <span className="text-white font-semibold text-left sm:text-right">
        Meezan Bank
      </span>
    </div>

    {/* Account Number */}
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
      <span className="font-medium">
        Account Number
      </span>

      <span className="text-white font-mono break-all text-left sm:text-right">
        9957-0111679963
      </span>
    </div>

  </div>

</div>



          {/* Upload Section */}


          <div className="mt-8">


            <label className="text-gray-400 text-sm">

              Upload Payment Screenshot

            </label>



            <div className="mt-3 border-2 border-dashed border-red-500/30 rounded-2xl p-8 text-center bg-black hover:border-red-500 transition">


              <div className="text-4xl mb-3">

                📤

              </div>


              <p className="text-white font-medium">

                Upload your payment proof

              </p>


              <p className="text-gray-500 text-sm mt-1">

                PNG, JPG images only

              </p>



              <input

                type="file"
                  name="paymentScreenshot"
                accept="image/*"

                onChange={handleChange}

                required

                className="mt-5 block w-full text-sm text-gray-400 file:bg-red-600 file:text-white file:border-0 file:px-5 file:py-2 file:rounded-lg file:cursor-pointer"

              />


            </div>


          </div>





          {/* Submit Button */}


          <button

            type="submit"

            disabled={isSubmitting}

            className={`mt-10 w-full py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition shadow-lg shadow-red-600/20 hover:scale-[1.02]
            
            ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
            
            `}

          >


            {isSubmitting ? "Submitting..." : "Submit Registration"}


          </button>



        </form>


      </div>


    </div>

  );

}