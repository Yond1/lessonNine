import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

export const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to={ROUTES.HOME} className="menu__item">
        Главная
      </NavLink>
      <NavLink to={ROUTES.DRIFT} className="menu__item">
        Дрифт-такси
      </NavLink>
      <NavLink to={ROUTES.TIMEATTACK} className="menu__item">
        Time Attack
      </NavLink>
      <NavLink to={ROUTES.FORZA} className="menu__item">
        Forza Karting
      </NavLink>
    </nav>
  );
};
