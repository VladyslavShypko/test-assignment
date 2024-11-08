import { useState } from "react";
import { useSelector } from "react-redux";
import { SvgIcon } from "../SvgIcon";
import { addCurrencyToValue } from "../../sharedHeplers/helpers";

import "./BalanceDropdown.scss";

const menuItems = ["item1", "item2"];
const income = "13%";

export const BalanceDropdown = () => {
  const [open, setOpen] = useState(false);
  const balance = useSelector((state) => state.currentBalance);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-button">
        <div className="dropdown-button-data">
          <span className="balance">{addCurrencyToValue(balance)}</span>
          <span className="income">{income}</span>
          <SvgIcon
            type="arrowDown"
            className="arrow-down-icon"
            onClick={handleOpen}
          />
        </div>
        <div className="dropdown-plus-icon">
          <SvgIcon type="plus" />
        </div>
      </div>
      {open && (
        <ul className="menu">
          {menuItems.map((item) => (
            <li className="menu-item">
              <button>{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
