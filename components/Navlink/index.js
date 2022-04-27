import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function NavLink({ href, children }) {
  console.log(useRouter());
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`nav-link ${router.pathname === href ? "active" : ""}`}
        //logic ketika mengantifkan navbar yang sedang d klik
        aria-current="page"
      >
        {children}
      </a>
    </Link>
  );
}
