import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./component/Home/Home";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
