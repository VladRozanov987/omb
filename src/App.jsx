import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useRef, useEffect } from "react";

//Components
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

//Pages
import MainPage from "./pages/Main.page";
import AboutPage from "./pages/About.page";
import AllNewsPage from "./pages/AllNews.page";
import NewsDetail from "./pages/NewsDetail.page";

//Global Style
import GlobalStyle from "./components/GlobalStyle.component";

//Hooks
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollToFooter = () => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
