import { useSelector } from "react-redux";
import { PromoField } from "../shared/PromoField";
import mockData from "./mockData";

import "./PromoCodeSection.scss";

export const PromoCodeSection = () => {
  const { header, subheader, applyPromoBtn } = mockData;
  const isDesktop = useSelector((state) => state.isDesktop);

  return (
    <div className="promo-code-section">
      <h2 className="promo-code-header">{header}</h2>
      <h3 className="promo-code-subheader">{subheader}</h3>
      <PromoField btnText={applyPromoBtn} displayInRow={isDesktop} />
    </div>
  );
};
