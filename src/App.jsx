import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "./customHooks/useMediaQuery";
import { Header } from "./components/Header";
import { SET_DEVICE_TYPE } from "./redux/actions";
import { PaymentSystemsSection } from "./components/PaymentSystemsSection";
import { PromoCodeSection } from "./components/PromoCodeSection";
import { TransactionSection } from "./components/TransactionSection";
import { PaymentPopup } from "./components/PaymentPopup";
import { SidebarMenu } from "./components/SidebarMenu";
import classNames from "classnames";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const isPaymentPopupOpen = useSelector((state) => state.isPaymentPopupOpen);
  const isSidebarMenuOpen = useSelector((state) => state.isSidebarMenuOpen);

  useEffect(() => {
    if (isPaymentPopupOpen || (isSidebarMenuOpen && !isDesktop))
      document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPaymentPopupOpen, isSidebarMenuOpen, isDesktop]);

  useEffect(() => {
    dispatch({ type: SET_DEVICE_TYPE, payload: { isDesktop: isDesktop } });
  }, [isDesktop]);

  return (
    <div className="App">
      <Header />
      <div
        className={classNames("container", {
          "modal-background": isPaymentPopupOpen,
        })}
      >
        <>
          <PaymentSystemsSection />
          <PromoCodeSection />
          <TransactionSection />
        </>
      </div>
      {isSidebarMenuOpen && <SidebarMenu />}
      {isPaymentPopupOpen && <PaymentPopup />}
    </div>
  );
}

export default App;
