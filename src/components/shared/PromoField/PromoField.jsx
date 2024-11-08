import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SvgIcon } from "../../SvgIcon";
import { Button } from "../Button";
import { ADD_PROMO_CODE } from "../../../redux/actions";
import classNames from "classnames";

import "./PromoField.scss";

export const PromoField = ({
  className,
  btnText,
  btnSize = "large",
  btnTopMargin = "small",
  displayInRow = false,
}) => {
  const dispatch = useDispatch();
  const promoCode = useSelector((state) => state.promoCode);
  const [enteredPromo, setEnteredPromo] = useState(promoCode);

  const handlePromoField = (e) => {
    const value = e.target.value && e.target.value.toUpperCase();
    setEnteredPromo(value);
  };

  const handleApplyBtn = () => {
    dispatch({
      type: ADD_PROMO_CODE,
      payload: { newPromoCode: enteredPromo },
    });
  };

  return (
    <div
      className={classNames("promo-field-wrapper", {
        "direction-row": displayInRow,
      })}
    >
      <div
        className={classNames("promo-field", {
          "short-promo-field": displayInRow,
        })}
      >
        <input type="text" value={enteredPromo} onChange={handlePromoField} />
        {enteredPromo && (
          <SvgIcon type="promoCodeApproved" className="promo-icon" />
        )}
      </div>
      <Button
        btnText={btnText}
        disabled={!enteredPromo}
        size={btnSize}
        topMargin={displayInRow ? "none" : btnTopMargin}
        onClick={handleApplyBtn}
      />
    </div>
  );
};
