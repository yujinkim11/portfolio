import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./globalstyle";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <GlobalStyled />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
