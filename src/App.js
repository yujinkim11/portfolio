import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Globalstyle } from "./Style/Globalstyle";
import { Header } from "./Header";
import { Main } from "./Main";
import { HelmetProvider } from "react-helmet-async";
import { Aboutme } from "./Aboutme";
import { Project } from "./Project";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Globalstyle />
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
