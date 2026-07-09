// App.jsx
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <SignedOut>
        <div className="min-h-[calc(100vh-30px)] flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background - Red Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 bg-[#111111] border border-[#1f1f1f] p-10 rounded-2xl shadow-2xl max-w-md w-full animate-fadeInUp hover:border-red-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Welcome!
              </h2>
              <p className="text-gray-500 mb-8 text-lg">
                Please login to access the registration form
              </p>

              <SignInButton mode="modal">
                <button className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    Login / Sign Up
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </SignInButton>
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            
            .animate-fadeInUp {
              animation: fadeInUp 0.5s ease-out forwards;
            }
          `}</style>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="p-4 flex justify-end max-w-7xl mx-auto">
          <div className="bg-[#111111] border border-[#1f1f1f] px-3 py-2 rounded-xl hover:border-red-500/30 transition-all duration-300">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <Register />
      </SignedIn>
    </div>
  );
}