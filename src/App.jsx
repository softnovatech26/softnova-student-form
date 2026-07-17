import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <SignedOut>

        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6">

          {/* Background Glow */}
          <div className="absolute inset-0">

            <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full animate-pulse"></div>

            <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full"></div>

          </div>


          <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">


            {/* Left Content */}

            <div className="space-y-6">

              <p className="inline-block px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-sm">
                🚀 Admissions Open 2026
              </p>


              <h1 className="text-5xl font-bold leading-tight">

                Build Your Future With

                <span className="text-red-500">
                  {" "}SoftNova Academy
                </span>

              </h1>


              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">

                Learn modern technologies from industry focused courses.
                Start your journey with web development, Python, AI and mobile
                application development.

              </p>


              <div className="grid grid-cols-2 gap-4 pt-4">

                <div className="bg-[#111] border border-white/10 rounded-xl p-4 hover:border-red-500 transition">

                  <h3 className="text-2xl font-bold text-red-500">
                    6+
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Professional Courses
                  </p>

                </div>


                <div className="bg-[#111] border border-white/10 rounded-xl p-4 hover:border-red-500 transition">

                  <h3 className="text-2xl font-bold text-red-500">
                    100%
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Practical Learning
                  </p>

                </div>

              </div>


            </div>



            {/* Login Card */}

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-red-500/40 transition">


              <div className="text-center">


                <div className="w-20 h-20 mx-auto rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">

                  <span className="text-4xl">
                    🎓
                  </span>

                </div>


                <h2 className="text-3xl font-bold mb-3">
                  Student Portal
                </h2>


                <p className="text-gray-400 mb-8">
                  Login to continue your registration process
                </p>



                <SignInButton mode="modal">

                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-semibold text-lg transition hover:scale-[1.02] shadow-lg shadow-red-600/20">

                    Login / Create Account

                  </button>

                </SignInButton>


              </div>


            </div>


          </div>


        </section>


      </SignedOut>



      <SignedIn>

        <div className="flex justify-end p-5">

          <div className="bg-[#111] border border-red-600/30 rounded-xl p-2">

            <UserButton afterSignOutUrl="/" />

          </div>

        </div>


        <Register />


      </SignedIn>


    </div>
  );
}