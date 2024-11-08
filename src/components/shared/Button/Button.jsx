import "./Button.scss";
import classNames from "classnames";

const btnSize = {
  small: "small-btn",
  large: "large-btn",
};

const margin = {
  small: "small-top-margin",
  large: "large-top-margin",
  none: "",
};

export const Button = ({
  btnText,
  onClick,
  className,
  size = "large",
  topMargin = "small",
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "btn",
        className,
        btnSize[size],
        margin[topMargin],
        {
          "disabled-btn": disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
