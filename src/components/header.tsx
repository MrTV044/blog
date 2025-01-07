import Link from "next/link";
import "./header.css";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <>
      <nav className="header">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <SearchBar />
        </ul>
      </nav>
    </>
  );
}
