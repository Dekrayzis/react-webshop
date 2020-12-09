import React, { useState } from "react";

//-- Containers
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";

//-- Components
import Modal from "./components/modal/Modal";

//-- Views
import Home from "./views/Home";
import Product from "./views/Product";
import SubscribeForm from "./containers/subscribe/SubscribeForm";
import Privacy from "./views/Privacy";
import Shipping from "./views/Shipping";
import Store_Template from "./views/Store_Template";
import CookieConsent from "./components/cookiePolicy/CookieConsent";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {/* <CookieConsent /> */}
      <div className="App">
        <Header />
        {/* <button onClick={openModal}>I'm a modal</button> */}
        <main>
          <Store_Template />
        </main>
        <SubscribeForm />
        <Footer />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Some modal div content information</p>
      </Modal>
    </>
  );
}

export default App;
