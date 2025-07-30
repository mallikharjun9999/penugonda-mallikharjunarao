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
    <div className="md:hidden">
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
            className="mobile-menu"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <button
                  onClick={() => handleSectionClick('about')}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                >
                  About
                </button>
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-primary transition-colors block"
                >
                  Projects
                </Link>
                <button
                  onClick={() => handleSectionClick('mentorship')}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                >
                  Mentorship
                </button>
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="text-2xl font-medium hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};