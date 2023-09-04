import { useState } from "react";

import "./App.css";

import Layout from "./components/Layout";

import PortfolioDashboard from "./components/PortfolioDashboard";
import Contact from "./components/Contact";
import About from "./components/About";

const pages = ["portfolio", "contact", "about"];

function App() {
  const [page, setPage] = useState(pages[0]);

  return (
      <Layout page={pages} onSetPage={setPage}>
      {page === "portfolio" && <PortfolioDashboard />}
      {page === "contact" && <Contact />}
      {page === "about" && <About />}
      </Layout>

  );
}

export default App;