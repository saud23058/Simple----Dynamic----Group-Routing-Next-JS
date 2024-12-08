import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <main>
      <h1>Project List</h1>
      <ul>
        <li>
          <Link href="/projects/carrent">Carrent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
        <li>
          <Link href="/projects/jubit">Jubit</Link>
        </li>
      </ul>
    </main>
  );
};

export default List;
