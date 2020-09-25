import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "./client.Menu";

const Header = () => {
  return (
    <div className="Header">
      <ul>
        {menu.map((data, idx) => {
          return (
            <li key={idx}>
              <NavLink to={data.menuLink} activeClassName="menuActive">
                {data.menuName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
