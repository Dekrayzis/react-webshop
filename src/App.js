import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
import Terms_Conditions from "./views/Terms_Conditions";
import CookieConsent from "./components/cookiePolicy/CookieConsent";
import Error404 from "./views/Error404";
import Contact from "./views/Contact";
import Careers from "./views/Careers";

function App() {
  const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  return (
    <>
      <CookieConsent />
      <div className="App">
        <Header />
        {/* <button onClick={openModal}>I'm a modal</button> */}
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/store/:id" exact component={Store_Template} />
            <Route path="/product/:id/:id2?" component={Product} />
            <Route path="/terms-and-service" exact component={Privacy} />
            <Route path="/shipping-returns" exact component={Shipping} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/careers" exact component={Careers} />
            <Route component={Error404} />
            <Route
              exact
              path="/terms-and-service"
              component={Terms_Conditions}
            />
          </Switch>
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
