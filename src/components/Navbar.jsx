import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span
                  className="text-2xl sm:text-3xl font-extrabold tracking-wide 
                             bg-gradient-to-r from-primary via-fuchsia-500 to-purple-600 
                             bg-clip-text text-transparent drop-shadow-sm animate-pulse"
                >
                  NeoMart
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
