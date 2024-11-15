import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import MainSection from "../components/MainSection.component";
import Photo from "../components/Photo.component";
import Council from "../components/Council.component";
import Questions from "../components/Questions.component";
import Banner from "../components/Banner.component";
import News from "../components/News.component";
import Faq from "../components/Faq.component";
import Partners from "../components/Partners.component";

const MainPage = () => {
  const questionsRef = useRef(null);
  const location = useLocation();
  const [lastScrollTo, setLastScrollTo] = useState(null);

  useEffect(() => {
    if (
      location.state?.scrollTo === "questions" &&
      location.state.scrollTo !== lastScrollTo
    ) {
      if (questionsRef.current) {
        questionsRef.current.scrollIntoView({ behavior: "smooth" });
        setLastScrollTo(location.state.scrollTo);
      }
    }
  }, [location, lastScrollTo]);

  useEffect(() => {
    if (location.state?.scrollTo === "questions" && questionsRef.current) {
      questionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <MainSection />
      <Photo />
      <Council title="Рада експертів" isAboutPage={false} />
      <div ref={questionsRef}>
        <Questions />
      </div>
      <Banner />
      <News limit={2} showButton={true} />
      <Faq />
      <Partners />
    </>
  );
};

export default MainPage;
