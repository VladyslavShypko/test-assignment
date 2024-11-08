import { Card } from "../Card";

import "./CardList.scss";

export const CardList = ({ title, cards }) => {
  return (
    <div className="card-list-wrapper">
      <h3 className="card-list-title">{title}</h3>
      <div className="card-list">
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};
