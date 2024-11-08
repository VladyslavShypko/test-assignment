import {
  logo,
  avatar,
  plus,
  arrowDown,
  arrowLeft,
  close,
  roundClose,
  search,
  gift,
  bell,
  hamburgerMenu,
  promoCodeApproved,
  sort,
  bitcoin,
  ethereum,
  tether,
  mastercard,
  piastrix,
  sticpay,
  visa,
  skrill,
  pin,
  pm,
} from "../../assets";
import classNames from "classnames";
import { useSelector } from "react-redux";

import "./SvgIcon.scss";

const mapIcons = {
  logo: {
    icon: logo,
    alt: "Logo icon",
  },
  avatar: {
    icon: avatar,
    alt: "Avatar icon",
  },
  plus: {
    icon: plus,
    alt: "Plus icon",
  },
  arrowDown: {
    icon: arrowDown,
    alt: "Arrow down icon",
  },
  arrowLeft: {
    icon: arrowLeft,
    alt: "Arrow left icon",
  },
  close: {
    icon: close,
    alt: "Close icon",
  },
  roundClose: {
    icon: roundClose,
    alt: "Round Close icon",
  },
  search: {
    icon: search,
    alt: "Search icon",
  },
  gift: {
    icon: gift,
    alt: "Gift icon",
  },
  bell: {
    icon: bell,
    alt: "Bell icon",
  },
  hamburgerMenu: {
    icon: hamburgerMenu,
    alt: "Hamburger menu icon",
  },
  mastercard: {
    icon: mastercard,
    alt: "Mastercard card icon",
  },
  visa: {
    icon: visa,
    alt: "Visa card icon",
  },
  skrill: {
    icon: skrill,
    alt: "Skrill card icon",
  },
  pm: {
    icon: pm,
    alt: "PM card icon",
  },
  piastrix: {
    icon: piastrix,
    alt: "Piastrix card icon",
  },
  sticpay: {
    icon: sticpay,
    alt: "STICPAY card icon",
  },
  pin: {
    icon: pin,
    alt: "PIN card icon",
  },
  bitcoin: {
    icon: bitcoin,
    alt: "Bitcoin icon",
  },
  ethereum: {
    icon: ethereum,
    alt: "Ethereum icon",
  },
  tether: {
    icon: tether,
    alt: "Tether icon",
  },
  promoCodeApproved: {
    icon: promoCodeApproved,
    alt: "Promo code approved icon",
  },
  sort: {
    icon: sort,
    alt: "Sort icon",
  },
};

const iconSize = {
  small: "",
  large: "large-icon",
};

export const SvgIcon = ({ type, className, onClick, isScalable = false }) => {
  const isDesktop = useSelector((state) => state.isDesktop);
  const size = isScalable && isDesktop ? "large" : "small";

  const { icon, alt } = mapIcons[type];

  return (
    <img
      src={icon}
      className={classNames(className, iconSize[size])}
      alt={alt}
      onClick={onClick}
    />
  );
};
