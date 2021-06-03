import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import links from "../../services/links.json";
import { Nav } from "../../styles/components/NavMenu";

const NavMenu = () => {
  const menus = links.menus;

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Nav>
        <ul className="nav__menus">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className={`nav__menu ${
                path === menu.url ? "nav__menu-active" : ""
              }`}
            >
              <NavLink to={menu.url} className="nav__link">
                <img
                  src={require(`../../${menu.icon}`).default}
                  alt={menu.name}
                  className="nav__icon"
                />
                <span>{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
    </>
  );
};

export default NavMenu;
