import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";

export default function Header({ detail }) {
  if (detail) {
    return (
      <section className=" bg-navy">
        <Navbar />
      </section>
    );
  }
  return (
    <header className="header bg-navy">
      <Navbar />
      <Hero />
    </header>
  );
}
