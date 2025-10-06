import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-sans text-lg font-medium text-gray-900 px-6 py-4 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-600">Mollar.</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Modou_Lamin_Minteh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md rounded mt-2 mx-4 p-4 animate-slideDown">
          <ul className="flex flex-col gap-4 text-center">
            {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-blue-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Modou_Lamin_Minteh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mt-2"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
