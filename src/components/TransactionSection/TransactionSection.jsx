import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Transaction } from "../Transaction";
import { TransactionSorting } from "../TransactionSorting";
import { Button } from "../shared/Button";
import mockData from "./mockData";

import "./TransactionSection.scss";

export const TransactionSection = () => {
  const { header, showMoreBtn, showByDefault } = mockData;
  const transactions = useSelector((state) => state.transactions);

  const [numberDisplayedTransactions, setnumberDisplayedTransactions] =
    useState(showByDefault);

  const shownTransactions = useMemo(
    () => transactions.slice(0, numberDisplayedTransactions),
    [transactions, numberDisplayedTransactions]
  );

  const handleShowMoreBtn = () =>
    setnumberDisplayedTransactions(transactions.length);

  return (
    <div className="transaction-section">
      <div className="transaction-section-heading">
        <h2>{header}</h2>
        <TransactionSorting />
      </div>
      <div className="transactions">
        {shownTransactions.map((transaction, idx) => (
          <Transaction key={idx} {...transaction} />
        ))}
      </div>
      <div className="show-more-btn-wrapper">
        <Button
          btnText={showMoreBtn}
          className="show-more-btn"
          onClick={handleShowMoreBtn}
        />
      </div>
    </div>
  );
};
