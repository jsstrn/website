import React, { Fragment } from "react";
import Header from "./Header";
import Social from "./Social";
import About from "./About";
import ProjectList from "./ProjectList";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Social />
      <About />
      <ProjectList />
      <Social />
      <Footer />
    </Fragment>
  );
}

export default App;
