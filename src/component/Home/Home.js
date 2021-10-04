//import react
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../MainSection/Main";
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* geeting all elements for Routing */}
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
