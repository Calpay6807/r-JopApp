import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Kayit Formu</h1>

      <nav>
        <NavLink to={"/form"}>Form Doldurma</NavLink>
        <NavLink to={"/form-valid"}>Onaylananlar</NavLink>
        <NavLink to={"/form-sub"}>İncelenenler</NavLink>
      </nav>
    </header>
  );
};

export default Header;
