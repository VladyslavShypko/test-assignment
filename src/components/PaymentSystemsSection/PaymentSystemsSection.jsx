import { useSelector } from "react-redux";
import { CardList } from "../CardList";
import mockData from "./mockData";

import "./PaymentSystemsSection.scss";

export const PaymentSystemsSection = () => {
  const eMoneyCards = useSelector((state) => state.eMoneyCards);
  const cryptoCards = useSelector((state) => state.cryptoCards);
  const { header, subheader, eMoneyTitle, cryptoTitle } = mockData;

  return (
    <div className="payment-systems-section">
      <h1 className="payment-systems-header">{header}</h1>
      <h2 className="payment-systems-subheader">{subheader}</h2>
      <CardList title={eMoneyTitle} cards={eMoneyCards} />
      <CardList title={cryptoTitle} cards={cryptoCards} />
    </div>
  );
};
