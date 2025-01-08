import Link from "next/link";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className=" shadow-md">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-gray-100 ">
          <li>
            <Link
              href="/"
              className="hover:text-red-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-red-400 transition duration-300"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="hover:text-red-400 transition duration-300"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-red-400 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
