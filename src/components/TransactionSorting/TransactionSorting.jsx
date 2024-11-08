import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SORT_TRANSACTIONS } from "../../redux/actions";
import { SvgIcon } from "../SvgIcon";

import "./TransactionSorting.scss";

const sortingParameters = [
  {
    key: "withdrawBy",
    title: "Withdraw by",
  },
  {
    key: "amountPayed",
    title: "Amount payed",
  },
  {
    key: "status",
    title: "Status",
  },
];

export const TransactionSorting = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const transactions = useSelector((state) => state.transactions);

  const handleIconClick = () => setDropdownOpen(!isDropdownOpen);

  const handleTransactionSorting = (sortKey) => {
    const sortedTransactions = [
      ...transactions.sort((transaction1, transaction2) =>
        transaction1[sortKey] > transaction2[sortKey] ? 1 : -1
      ),
    ];

    dispatch({
      type: SORT_TRANSACTIONS,
      payload: {
        transactions: sortedTransactions,
      },
    });

    setDropdownOpen(false);
  };

  return (
    <div className="transaction-sorting">
      <SvgIcon
        className="transaction-sorting-icon"
        type="sort"
        onClick={handleIconClick}
      />
      {isDropdownOpen && (
        <ul className="transaction-sorting-dropdown">
          {sortingParameters.map(({ key, title }, idx) => (
            <li key={idx} className="sorting">
              <button onClick={() => handleTransactionSorting(key)}>
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
