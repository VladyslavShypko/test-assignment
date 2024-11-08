export const getCardCommission = (paymentCommission) =>
  `Commission ${paymentCommission * 100}$`;

export const addCurrencyToValue = (value) => `${value}$`;

export const getWithdrawTitle = (paymentMethod) => `by ${paymentMethod}, USD`;
