import React from "react";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import NavTwo from "./mainNav/NavTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellPage from "./pages/SellPage";
import FollowingPage from "./pages/Following";
import NewArrivals from "./redirectingPages/NewArrivals";
import Bags from "./pages/Bags";
import MensPage from "./redirectingPages/MensPage";
import SubmitQuote from "./mockRedirectFiles/SubmitQuote";
import VirtualAppointment from "./mockRedirectFiles/VirtualAppt";
import WhiteGlove from "./mockRedirectFiles/WhiteGlove";
import SellLocation from "./mockRedirectFiles/SellLocation";
import ComboSignInUp from "./user/ComboSignUpIn";
import Dashboard from "./userAccountRedirectPages/Dashboard";
import DashboardUserNav from "./userAccountRedirectPages/DashboardUserNav";
import MyItems from "./userAccountRedirectPages/MyItems";
import MyPurchases from "./userAccountRedirectPages/MyPurchases";
import Alerts from "./userAccountRedirectPages/Alerts";
import MySales from "./userAccountRedirectPages/MySales";
import UserRouter from "./UserRouter";
import ActiveQuotes from "./userDashboardOptions/ActiveQuotes";
import Addresses from "./userDashboardOptions/Addresses";
import EmailPreferences from "./userDashboardOptions/EmailPreferences";
import MySettings from "./userDashboardOptions/MySettings";
import PaymentOptions from "./userDashboardOptions/PaymentOptions";
import UserNPass from "./userDashboardOptions/UserNPass";
import SellerStats from "./userDashboardOptions/SellerStats";
import BagSelection from "./redirectingPages/BagSelection";
import ShoppingCart from "./redirectingPages/ShoppingCart";
// import AddressModal from "./userModals/AddressModal";

const MainRouter = () => {
  return (
    <Router>
      <NavTwo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/newArrivals" element={<NewArrivals />} />
        <Route path="/bags" element={<Bags />}>
          {/* bags subroutes */}
          <Route path=":group/:id" />
        </Route>
        {/* bag selected route */}
        <Route path="/bag/:id" element={<BagSelection />} />
        {/* route to shopping cart */}
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/gift-guide-for-him" element={<MensPage />} />
        <Route path="/submit-quote" element={<SubmitQuote />} />
        <Route path="/virtualAppointment" element={<VirtualAppointment />} />
        <Route path="/white-glove" element={<WhiteGlove />} />
        <Route path="/sellLoc" element={<SellLocation />} />
        <Route path="/login" element={<ComboSignInUp />} />
        {/* USER ROUTES START HERE */}
        <Route path="user" element={<UserRouter />}>
          <Route path="dashboardNav" element={<DashboardUserNav />} />
          <Route path="dashboard" element={<Dashboard />}>
            {/* Dashboard Nav starts here */}
            <Route path="activeQuotes" element={<ActiveQuotes />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="emailPreferences" element={<EmailPreferences />} />
            <Route path="mysettings" element={<MySettings />} />
            <Route path="paymentOptions" element={<PaymentOptions />} />
            <Route path="userNPass" element={<UserNPass />} />
            <Route path="sellerStats" element={<SellerStats />} />
            {/* <Route path="mock" element={<AddressModal />} /> */}
          </Route>
          {/* second usr nav starts here */}
          <Route path="items" element={<MyItems />} />
          <Route path="purchases" element={<MyPurchases />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="sales" element={<MySales />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
