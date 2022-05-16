import React from "react";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { Contact } from "./Contact";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
      <Logo />
      <Links />
      <Contact/>
      </div>
    </nav>
  );
};
