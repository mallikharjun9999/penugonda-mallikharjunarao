import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const MobileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded bg-primary text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute top-12 right-0 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50 w-40 border border-gray-200 dark:border-gray-700">
          <Link to="/projects" className="hover:text-primary" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <button onClick={() => {document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setOpen(false);}} className="text-left hover:text-primary">
            About
          </button>
          <button onClick={() => {document.getElementById("mentorship")?.scrollIntoView({ behavior: "smooth" }); setOpen(false);}} className="text-left hover:text-primary">
            Mentorship
          </button>
          <button onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setOpen(false);}} className="text-left hover:text-primary">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};
