import React, { Component } from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import "./Main.css";
import Routes from "../../containers/Routes/Routes";

class Main extends Component {
  render() {
    return (
      <>
        <Header className="header" />
        <Routes className="content" />
        <Footer className="footer" />
      </>
    );
  }
}

export default Main;
