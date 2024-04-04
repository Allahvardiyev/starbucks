import { NavLink, Outlet } from "react-router-dom";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menu-navbar">
        <div className="container">
          <ul>
            <li>
              <NavLink to={"/menu/all"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"featured"}>Featured</NavLink>
            </li>
            <li>
              <NavLink to={"previous"}>Previous</NavLink>
            </li>
            <li>
              <NavLink to={"favorites"}>Favorites</NavLink>
            </li>
          </ul>
        </div>
      </div>
      

      <Outlet />
    </div>
  );
}

export default Menu;


