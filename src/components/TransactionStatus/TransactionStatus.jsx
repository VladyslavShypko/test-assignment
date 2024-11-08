import classNames from "classnames";

import "./TransactionStatus.scss";

const statusColor = {
  Processing: "yellow-status",
  Active: "green-status",
  Performed: "blue-status",
};

export const TransactionStatus = ({ fieldCaption, status }) => (
  <div className="transaction-status">
    <div className={classNames("status-type", statusColor[status])}>
      {status}
    </div>
    <div className="status-field-caption">{fieldCaption}</div>
  </div>
);
