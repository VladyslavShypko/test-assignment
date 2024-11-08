import { legacy_createStore as createStore } from "redux";
import {
  OPEN_PAYMENT_POPUP,
  CLOSE_PAYMENT_POPUP,
  OPEN_SIDEBAR_MENU,
  CLOSE_SIDEBAR_MENU,
  SET_PAYMENT_METHOD,
  ADD_TRANSACTION,
  SORT_TRANSACTIONS,
  ADD_PROMO_CODE,
  DECREASE_BALANCE,
  SET_DEVICE_TYPE,
} from "./actions";
import defaultState from "./defaultState";

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_DEVICE_TYPE:
      return { ...state, isDesktop: payload.isDesktop };
    case OPEN_PAYMENT_POPUP:
      return { ...state, isPaymentPopupOpen: true };
    case CLOSE_PAYMENT_POPUP:
      return { ...state, isPaymentPopupOpen: false };
    case OPEN_SIDEBAR_MENU:
      return { ...state, isSidebarMenuOpen: true };
    case CLOSE_SIDEBAR_MENU:
      return { ...state, isSidebarMenuOpen: false };
    case SET_PAYMENT_METHOD:
      return { ...state, selectedPaymentMethod: payload.paymentMethod };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload.newTransaction],
      };
    case SORT_TRANSACTIONS:
      return { ...state, transactions: payload.transactions };
    case ADD_PROMO_CODE:
      return {
        ...state,
        promoCode: payload.newPromoCode,
      };
    case DECREASE_BALANCE:
      return {
        ...state,
        currentBalance: payload.updatedBalance,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
