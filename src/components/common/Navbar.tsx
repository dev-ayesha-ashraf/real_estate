import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import LoginDialog from "./Login";
import { useCategories, useCategory } from "@/hooks/useCategories";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: currentCategory } = useCategory(categoryId || '');
  const { data: categories = [] } = useCategories();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const getDomainTitle = () => {
    if (currentCategory) {
      return currentCategory.name;
    }
    return "Real Estate"; // Default title
  };

  const LoginButton = () => (
    <Button
      onClick={() => setShowLoginDialog(true)}
      className="flex items-center gap-2 text-lg text-primary bg-gradient-to-r from-dealership-primary/80 to-dealership-primary/100 px-6"
    >
      <LogIn className="w-5 h-5" />
      Login
    </Button>
  );

  const MobileNav = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isMobile) return null;

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )}

        <div
          className={`
          fixed top-0 left-0 h-screen bg-white z-50
          transition-transform duration-300 ease-in-out
          w-64 transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-dealership-primary">Menu</h2>
            <button onClick={onClose} className="p-1">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-lg hover:text-dealership-primary"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              {/* {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="text-lg hover:text-dealership-primary"
                    onClick={onClose}
                  >
                    {category.name}
                  </Link>
                </li>
              ))} */}
              <div>
                <LoginButton />
              </div>
            </ul>
          </nav>
        </div>
      </>
    );
  };

  return (
    <>
      <nav
        className={`
    shadow-md py-4 z-50 transition-colors duration-300
    ${isScrolled || isMobile ? "fixed top-0 left-0 right-0 bg-white" : "relative bg-transparent"}
  `}
      >

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center justify-between md:w-auto">
              <Link
                to="/"
                className="flex items-center group transition-transform duration-300 hover:scale-105"
              >
                <div className="text-2xl ml-2 font-bold text-dealership-primary group-hover:text-dealership-primary/80 transition-colors">
                  {getDomainTitle()}
                </div>
              </Link>

              {isMobile && (
                <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                  <Menu className="w-6 h-6 text-dealership-primary" />
                </button>
              )}
              <MobileNav
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>

            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/"
                className={`text-dealership-primary text-lg font-medium ${isActive("/") ? "text-dealership-primary/80" : "text-gray-700"
                  }`}
              >
                Home
              </Link>

            </div>
            <div className="hidden md:block">
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>

      <LoginDialog
        showLoginDialog={showLoginDialog}
        setShowLoginDialog={setShowLoginDialog}
      />
    </>
  );
};
