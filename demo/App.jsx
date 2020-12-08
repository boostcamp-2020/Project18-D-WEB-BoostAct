import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./router";
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div style={{ fontFamily: "BMJUA" }}>
      <section id="header">
        <Header />
        <section id="body">
          <Router />
          {/* <Navigator /> */}
        </section>
        <Footer />
      </section>
    </div>
  );
};
export default Main;
