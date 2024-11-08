import { useSelector } from "react-redux";
import { SvgIcon } from "../SvgIcon";
import {
  getWithdrawTitle,
  addCurrencyToValue,
} from "../../sharedHeplers/helpers";
import { TransactionStatus } from "../TransactionStatus";
import mockData from "./mockData";

import "./Transaction.scss";

export const Transaction = ({
  paymentMethodIcon,
  status,
  withdrawBy,
  transactionNumber,
  paymentDate,
  amountPayed,
}) => {
  const {
    statusFieldCaption,
    withdrawFieldCaption,
    numberFieldCaption,
    dateFieldCaption,
    amountFieldCaption,
  } = mockData;

  const isDesktop = useSelector((state) => state.isDesktop);

  return (
    <div className="transaction-wrapper">
      <div className="transaction">
        <div className="transaction-heading">
          <SvgIcon
            className="transaction-method-icon"
            type={paymentMethodIcon}
          />
          {!isDesktop && (
            <TransactionStatus
              fieldCaption={statusFieldCaption}
              status={status}
            />
          )}
        </div>
        <div className="transaction-data">
          <div className="field withdraw-field">
            <p className="field-heading">{getWithdrawTitle(withdrawBy)}</p>
            <span className="field-caption">{withdrawFieldCaption}</span>
          </div>
          <div className="field number-field">
            <p className="field-heading">{transactionNumber}</p>
            <span className="field-caption">{numberFieldCaption}</span>
          </div>
          <div className="field payment-date-field">
            <p className="field-heading">{paymentDate}</p>
            <span className="field-caption">{dateFieldCaption}</span>
          </div>
          <div className="field amount-payed-field">
            <p className="field-heading">{addCurrencyToValue(amountPayed)}</p>
            <span className="field-caption">{amountFieldCaption}</span>
          </div>
        </div>
        {isDesktop && (
          <TransactionStatus
            fieldCaption={statusFieldCaption}
            status={status}
          />
        )}
      </div>
      <div className="divider" />
    </div>
  );
};
