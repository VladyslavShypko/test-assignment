import { useDispatch } from "react-redux";
import { SvgIcon } from "../SvgIcon";
import { CLOSE_SIDEBAR_MENU } from "../../redux/actions";

import "./SidebarMenu.scss";

const sidebarMenuItems = [
  "Casino Games",
  "Live Games",
  "TV-Bet",
  "Sport Games",
  "Virtual",
  "Tournaments",
  "Spin Shop",
  "FAQ",
  "Support Chat",
];

export const SidebarMenu = () => {
  const dispatch = useDispatch();
  const handleCloseIconClick = () => dispatch({ type: CLOSE_SIDEBAR_MENU });

  return (
    <div className="sidebar-menu-wrapper">
      <div className="sidebar-menu-heading">
        <SvgIcon type="logo" />
        <SvgIcon
          type="roundClose"
          className="close-icon"
          onClick={handleCloseIconClick}
        />
      </div>
      <ul className="sidebar-menu">
        {sidebarMenuItems.map((menuItem, idx) => (
          <li key={idx} className="menu-item">
            {menuItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
