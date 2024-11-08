import { useDispatch } from "react-redux";
import { OPEN_PAYMENT_POPUP, SET_PAYMENT_METHOD } from "../../redux/actions";
import { SvgIcon } from "../SvgIcon";
import { getCardCommission } from "../../sharedHeplers/helpers";
import classNames from "classnames";

import "./Card.scss";

const tagMarkedColor = {
  POPULAR: "blue-tag",
  TRUSTED: "red-tag",
};

export const Card = ({ card }) => {
  const dispatch = useDispatch();
  const { tag, svgType, title, commission } = card;

  const handleCardClick = () => {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: { paymentMethod: { ...card } },
    });
    dispatch({
      type: OPEN_PAYMENT_POPUP,
    });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {tag && (
        <span className={classNames("card-tag", tagMarkedColor[tag.title])}>
          {tag.title}
        </span>
      )}
      <SvgIcon type={svgType} isScalable={true} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{getCardCommission(commission)}</p>
      </div>
    </div>
  );
};
