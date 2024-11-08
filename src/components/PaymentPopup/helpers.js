export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  if (hour === 0) hour = 12;

  return `${month}.${day} at ${hour}:${minute}${ampm}`;
};

export const getCurrencyAmount = (amount, isSelected = false) =>
  isSelected ? `$ ${amount}` : `+ $${amount}`;

export const getTransactionNumber = () => Math.floor(Math.random() * 100000);

const getCommissionWithDiscount = (commission, promoCodeDiscount) =>
  !commission
    ? commission
    : commission > promoCodeDiscount
    ? commission - promoCodeDiscount
    : 0;

export const calcAmountPayed = (
  amount,
  commission,
  promoCode,
  promoCodeDiscount
) => {
  const commissionWithDiscount = promoCode
    ? getCommissionWithDiscount(commission, promoCodeDiscount)
    : commission;
  return amount - amount * commissionWithDiscount;
};
