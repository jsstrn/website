import React from "react";
import Header from "./Header";
import Social from "./Social";
import About from "./About";
import ProjectList from "./ProjectList";
import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Social />
      <About />
      <ProjectList />
      <Social />
      <Footer />
    </React.Fragment>
  );
}

export default App;
