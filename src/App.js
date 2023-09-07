// import { useState } from "react";

// import "./App.css";

// import Layout from "./components/layout";

// import Portfolio from "./components/pages/portfolio";
// import Contact from "./components/pages/contact";
// import About from "./components/pages/about";
// 

// const pages = ["portfolio", "contact", "about"];

// function App() {
//   const [page, setPage] = useState(pages[0]);

//   return (
//       <Layout page={pages} onSetPage={setPage}>
//       {page === "portfolio" && <Portfolio />}
//       {page === "contact" && <Contact />}
//       {page === "about" && <About />}
//       </Layout>

//   );
// }

// export default App;

import React from "react";
import MainContainer from "./components/MainContainer";

const App = () => <MainContainer />;

export default App;