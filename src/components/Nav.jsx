
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-sans text-xl font-medium text-gray-900 p-4 font-bold bg-white shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-blue-600 font-sans">Mollar.</h1>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
         <FiMenu className="text-2xl" />
        </button>
        <ul className="hidden md:flex gap-4 md:text-lg">
          <li><a href="#home">Home</a></li>
          <li className="cursor-pointer"><a href="#about">About</a></li>
          <li className="cursor-pointer"><a href="#skills">Skills</a></li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col gap-2 mt-2 md:hidden bg-white shadow rounded p-2">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      )}
    </nav>
  );
}