import { useDispatch, useSelector } from "react-redux";
import { OPEN_SIDEBAR_MENU } from "../../redux/actions";
import { BalanceDropdown } from "../BalanceDropdown";
import { SvgIcon } from "../SvgIcon";

import "./Header.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.isDesktop);

  const handleHamburgerMenuClick = () => dispatch({ type: OPEN_SIDEBAR_MENU });

  return (
    <div className="header">
      <div className="navigation">
        <SvgIcon
          type="hamburgerMenu"
          className="hamburger-menu"
          onClick={handleHamburgerMenuClick}
        />
        <SvgIcon type="logo" />
      </div>
      <div className="account-details-wrapper">
        <div className="acouunt-details">
          <>
            <div className="toolbar">
              {isDesktop && (
                <div className="toolbar-items">
                  <SvgIcon type="search" />
                  <SvgIcon type="gift" />
                  <SvgIcon type="bell" />
                </div>
              )}
              <BalanceDropdown />
            </div>
            {isDesktop && <SvgIcon type="avatar" />}
          </>
        </div>
      </div>
    </div>
  );
};
