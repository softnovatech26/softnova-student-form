import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <div>
      <Navbar />

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Please Login First
            </h2>

            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Login / Sign Up
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>


      <SignedIn>
        <div className="p-4 flex justify-end">
          <UserButton />
        </div>

        <Register />
      </SignedIn>

    </div>
  );
}