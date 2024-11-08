import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLOSE_PAYMENT_POPUP,
  ADD_TRANSACTION,
  DECREASE_BALANCE,
} from "../../redux/actions";
import { PromoField } from "../shared/PromoField";
import { SvgIcon } from "../SvgIcon";
import { Button } from "../shared/Button";
import {
  getCardCommission,
  addCurrencyToValue,
} from "../../sharedHeplers/helpers";
import {
  formatDate,
  getCurrencyAmount,
  getTransactionNumber,
  calcAmountPayed,
} from "./helpers";
import mockData from "./mockData";

import "./PaymentPopup.scss";

export const PaymentPopup = () => {
  const {
    backBtnText,
    currentBalanceHeading,
    paymentClarification,
    paymentAmountHeading,
    paymentAmountFieldNote,
    promoCodeHeader,
    promoCodeDiscount,
    applyPromoBtnText,
    depositBtnText,
    amount: { defaultAmount, amountList },
  } = mockData;

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(defaultAmount);
  const currentBalance = useSelector((state) => state.currentBalance);
  const promoCode = useSelector((state) => state.promoCode);
  const selectedPaymentMethod = useSelector(
    (state) => state.selectedPaymentMethod
  );

  const { svgType, title, commission } = selectedPaymentMethod;
  const paymentTitle = title + " - " + getCardCommission(commission);

  const handleBackBtn = () => {
    dispatch({ type: CLOSE_PAYMENT_POPUP });
  };

  const handleDepositBtn = () => {
    const amountPayed = calcAmountPayed(
      amount,
      commission,
      promoCode,
      promoCodeDiscount
    );
    const updatedBalance = (currentBalance - amountPayed).toFixed(2);
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        newTransaction: {
          paymentMethodIcon: svgType,
          status: "Processing",
          withdrawBy: title,
          transactionNumber: getTransactionNumber(),
          paymentDate: formatDate(new Date()),
          amountPayed: amountPayed,
        },
      },
    });
    dispatch({
      type: DECREASE_BALANCE,
      payload: { updatedBalance: updatedBalance },
    });
    dispatch({ type: CLOSE_PAYMENT_POPUP });
  };

  return (
    <div className="payment-popup">
      <div className="popup-navigation">
        <button className="back-btn" onClick={handleBackBtn}>
          <SvgIcon type="arrowLeft" />
          <span>{backBtnText}</span>
        </button>
        <button className="close-btn" onClick={handleBackBtn}>
          <SvgIcon type="close" />
        </button>
      </div>
      <div className="payment-data">
        <div className="current-balance">
          {currentBalanceHeading}
          <span className="current-balance-amount">
            {addCurrencyToValue(currentBalance)}
          </span>
        </div>
        <div className="payment-method-dropdown-wrapper">
          <div className="payment-method-dropdown">
            <SvgIcon
              type={svgType}
              className="payment-method-icon"
              isScalable={true}
            />
            <div className="payment-method">
              <span className="payment-title">{paymentTitle}</span>
              <span className="payment-clarification">
                {paymentClarification}
              </span>
            </div>
          </div>
          <SvgIcon type="arrowDown" />
        </div>
        <div className="payment-amount">
          <h2 className="payment-amount-heading">{paymentAmountHeading}</h2>
          <input
            className="payment-amount-field"
            type="text"
            value={getCurrencyAmount(amount, true)}
            onChange={(e) => setAmount(+e.target.value.slice(1))}
          ></input>
          <div className="payment-amount-list">
            {amountList.map((amountItem, idx) => (
              <div
                className="amount"
                key={idx}
                onClick={() => setAmount(amount + amountItem)}
              >
                {getCurrencyAmount(amountItem)}
              </div>
            ))}
          </div>
          <div className="payment-amount-field-note">
            {paymentAmountFieldNote}
          </div>
        </div>
        <div className="payment-promo-code">
          <h2 className="payment-promo-header">{promoCodeHeader}</h2>
          <PromoField
            displayInRow={true}
            btnText={applyPromoBtnText}
            btnSize="small"
            btnTopMargin="none"
          />
          <Button
            btnText={depositBtnText}
            topMargin="large"
            onClick={handleDepositBtn}
          />
        </div>
      </div>
    </div>
  );
};
