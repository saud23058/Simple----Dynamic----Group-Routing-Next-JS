import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between py-6 px-8">
        <p>Next js</p>
        <ul className="flex justify-center gap-8">
          <Link href="/">
            <li>Home 🏠</li>
          </Link>
          <Link href="/about">
            <li>About 🐶</li>
          </Link>
          <Link href="/contact">
            <li>contact 🤙</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
