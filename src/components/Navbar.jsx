export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 rounded-full"
        />
      </div>
  {/* CENTER TITLE */}
      {/* CENTER TITLE */}
      <h1 className="text-xl font-bold text-blue-600">
        SoftNova Academy Form
      </h1>

      
      {/* RIGHT EMPTY (for balance) */}
      <div></div>
    </nav>
  );
}