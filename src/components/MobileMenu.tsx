import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  onSectionClick: (sectionId: string) => void;
}

export const MobileMenu = ({ onSectionClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="h-10 w-10"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 flex items-start justify-end p-4 z-40"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-3/4 max-w-xs rounded-lg shadow-lg p-6 pt-4 space-y-6 relative 
                         bg-gradient-to-br from-orange-100 via-white to-yellow-50 
                         dark:from-gray-900 dark:via-gray-800 dark:to-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top-left Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-1 left-1 z-50 
                           bg-orange-500 text-white 
                           dark:bg-orange-400 dark:hover:bg-orange-500 
                           rounded-xl p-2 shadow-md border 
                           hover:bg-orange-600 transition-all duration-200"
              >
                <X className="h-3 w-10" />
              </button>

              {/* Menu Items */}
              <button
                onClick={() => handleSectionClick("about")}
                className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors block"
              >
                About
              </button>

              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors block"
              >
                Projects
              </Link>

              <button
                onClick={() => handleSectionClick("mentorship")}
                className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors block"
              >
                Mentorship
              </button>

              <button
                onClick={() => handleSectionClick("contact")}
                className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary transition-colors block"
              >
                Contact
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
